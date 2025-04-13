'use client'

import { useEffect, useState } from 'react'
import { useForecast } from '@/hooks/useForecast'
import { useRouter } from 'next/navigation'
import { useCurrentSearch } from '@/store/useCurrentSearch'
import { useSearchHistory } from '@/store/useSearchHistory'
import { ICityCardProps, TForecastType } from '@/types/types'
import styles from './CityCard.module.scss'

export const CityCard = ({ city }: ICityCardProps) => {
  const { getCityForecast } = useSearchHistory()
  const { forecast, loading, error, fetchForecast } = useForecast()
  const [isFetched, setIsFetched] = useState(false)

  const [localForecast, setLocalForecast] = useState<TForecastType | null>(null)
  const router = useRouter()
  const { setCurrentSearch } = useCurrentSearch()

  const handleCardClick = () => {
    setCurrentSearch(city)
    router.push(`/forecast`)
  }

  useEffect(() => {
    const checkCacheAndFetch = async () => {
      const cached = getCityForecast(city.name, city.country)

      if (cached?.forecast) {
        setLocalForecast(cached.forecast)
        setIsFetched(true)
      } else {
        if (!isFetched) {
          await fetchForecast(city)
          setIsFetched(true)
        }
      }
    }

    if (!isFetched && !localForecast) {
      checkCacheAndFetch()
    }
  }, [city, fetchForecast, isFetched, localForecast, getCityForecast])

  const displayForecast = localForecast || forecast

  if (loading && !isFetched) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.city_card} onClick={handleCardClick}>
      <div className={styles.header}>
        <h3 className={styles.city_name}>{city.name}</h3>
        <span className={styles.country}>({city.country})</span>
      </div>
      <div className={styles.temperature}>
        {displayForecast ? (
          <p className={styles.temperature_value}>
            {Math.round(displayForecast.list[0].main.temp)}°C
          </p>
        ) : (
          <p className={styles.temperature_value}>Temperature not available</p>
        )}
      </div>
    </div>
  )
}
