'use client'

import { useState, useEffect } from 'react'
import { Search } from '@/components/Search/Search'
import { CityWeather } from '@/components/CityWeather/CityWeather'
import { Header } from '@/components/Header/Header'
import { useForecast } from '@/hooks/useForecast'
import { useSearchHistory } from '@/store/useSearchHistory'
import { ICity, ICityWithForecast } from '@/types/types'
import styles from './page.module.scss'

export default function Home() {
  const { forecast, loading, error, fetchForecast } = useForecast()
  const [selectedCity, setSelectedCity] = useState<ICityWithForecast | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const { addSearch, getCityForecast } = useSearchHistory()

  useEffect(() => {
    const checkCacheAndFetch = async () => {
      if (selectedCity) {
        const cached = getCityForecast(selectedCity.name, selectedCity.country)

        if (cached?.forecast) {
          setSelectedCity({
            ...selectedCity,
            forecast: cached.forecast,
          })
        } else {
          await fetchForecast(selectedCity)
        }
        setHasSearched(true)
      }
    }

    if (selectedCity && !hasSearched) {
      checkCacheAndFetch()
    }
  }, [selectedCity, hasSearched, fetchForecast, getCityForecast])

  useEffect(() => {
    if (forecast && selectedCity) {
      addSearch({
        ...selectedCity,
        forecast,
      })
    }
  }, [forecast, selectedCity, addSearch])

  const handleSearchSubmit = (city: ICity) => {
    setSelectedCity(city)
    setHasSearched(false)
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.custom_gradient} ${styles.main}`}>
        <Search onSearchSubmit={handleSearchSubmit} />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {selectedCity?.forecast && !loading && !error && (
          <CityWeather forecast={selectedCity.forecast} selectedCity={selectedCity} />
        )}
      </main>
    </div>
  )
}
