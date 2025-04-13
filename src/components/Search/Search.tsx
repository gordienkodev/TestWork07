'use client'

import { useCitySearch } from '@/hooks/useCitySearch'
import styles from './Search.module.scss'
import { useCurrentSearch } from '@/store/useCurrentSearch'
import { ICity, ISearchProps } from '@/types/types'

export const Search = ({ onSearchSubmit }: ISearchProps) => {
  const { term, options, selectedOption, onInputChange, onOptionSelect } = useCitySearch()
  const { setCurrentSearch } = useCurrentSearch()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedOption) {
      setCurrentSearch(selectedOption)
      onSearchSubmit(selectedOption)
    }
  }

  const handleCitySelect = (city: ICity) => {
    onOptionSelect(city)
  }

  return (
    <div className={styles.custom_styles}>
      <h1>Weather Forecast</h1>
      <form className="container-fluid" onSubmit={handleSearchSubmit}>
        <div className="input-group">
          <input
            className={`form-control ${styles.search_input}`}
            value={term}
            onChange={onInputChange}
            placeholder="Enter city name..."
          />
          <button className={`btn ${styles.custom_btn}`} type="submit">
            Search
          </button>
        </div>
        {options.length > 0 && (
          <ul className="list-group mt-2">
            {options.map((city, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => handleCitySelect(city)}
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  )
}
