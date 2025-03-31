'use client'
import { useState, useEffect } from 'react'
import { Search } from '../components/Search/Search'
import { CityWeather } from '../components/CityWeather/CityWeather'
import styles from './page.module.scss'
import { useForecast } from '../hooks/useForecast'
import { Header } from '../components/Header/Header'
import { ICity } from '../types/types'

export default function Home() {
  const { forecast, loading, error, fetchForecast } = useForecast()
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    if (selectedCity && !hasSearched) {
      fetchForecast(selectedCity)
      setHasSearched(true)
    }
  }, [selectedCity, hasSearched, fetchForecast])

  const handleSearchSubmit = (selectedCity: ICity) => {
    setSelectedCity(selectedCity)
    setHasSearched(false)
  }

  return (
    <div className={styles.page}>
      <Header />
      <main
        className={`${styles.custom_gradient} d-flex flex-column gap-3 justify-content-center align-items-center vh-100 w-100`}
      >
        <Search onSearchSubmit={handleSearchSubmit} />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {forecast && selectedCity && !loading && !error && (
          <CityWeather forecast={forecast} selectedCity={selectedCity} />
        )}
      </main>
    </div>
  )
}
