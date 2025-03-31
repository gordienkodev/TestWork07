'use client'
import { useEffect, useState } from 'react'
import { useCurrentSearch } from '../../store/useCurrentSearch'
import { ForecastOverview } from '../../components/ForecastOverview/ForecastOverview'
import { useForecast } from '../../hooks/useForecast'
import styles from './page.module.scss'
import { Header } from '../../components/Header/Header'

export default function Forecast() {
  const { currentSearch } = useCurrentSearch()
  const { forecast, loading, error, fetchForecast } = useForecast()
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    if (currentSearch && !hasFetched) {
      const city = currentSearch

      fetchForecast(city)
      setHasFetched(true)
    }
  }, [currentSearch, fetchForecast, hasFetched])

  if (loading) {
    return <p>Loading forecast...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.page}>
      <Header />
      <main
        className={`${styles.custom_gradient} d-flex flex-column gap-3 justify-content-center align-items-center vh-100 w-100`}
      >
        {currentSearch && forecast && (
          <ForecastOverview forecast={forecast} currentSearch={currentSearch} />
        )}
      </main>
    </div>
  )
}
