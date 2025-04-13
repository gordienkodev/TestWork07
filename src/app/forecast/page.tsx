'use client'

import { useEffect, useState } from 'react'
import { useCurrentSearch } from '@/store/useCurrentSearch'
import { ForecastOverview } from '@/components/ForecastOverview/ForecastOverview'
import { useForecast } from '@/hooks/useForecast'
import { Header } from '@/components/Header/Header'
import { useSearchHistory } from '@/store/useSearchHistory'
import { TForecastType } from '@/types/types'
import styles from './page.module.scss'

export default function Forecast() {
  const { currentSearch } = useCurrentSearch()
  const { forecast, loading, error, fetchForecast } = useForecast()
  const { getCityForecast, addSearch } = useSearchHistory()
  const [localForecast, setLocalForecast] = useState<TForecastType | null>(null)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    const checkCacheAndFetch = async () => {
      if (currentSearch && !hasFetched) {
        const cached = getCityForecast(currentSearch.name, currentSearch.country)

        if (cached?.forecast) {
          setLocalForecast(cached.forecast)
          setHasFetched(true)
        } else {
          await fetchForecast(currentSearch)
          setHasFetched(true)
        }
      }
    }

    checkCacheAndFetch()
  }, [currentSearch, hasFetched, getCityForecast, fetchForecast])

  useEffect(() => {
    if (forecast && currentSearch) {
      addSearch({ ...currentSearch, forecast })
      setLocalForecast(forecast)
    }
  }, [forecast, currentSearch, addSearch])

  if (loading) {
    return <p className={styles.loading}>Loading forecast...</p>
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {currentSearch && localForecast && (
          <ForecastOverview forecast={localForecast} currentSearch={currentSearch} />
        )}
      </main>
    </div>
  )
}
