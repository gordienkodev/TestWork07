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
    <div
      className={`${styles.city_card} d-flex flex-column align-items-center p-3 rounded shadow-sm`}
      onClick={handleCardClick}
    >
      <div className="d-flex align-items-baseline gap-2">
        <h3 className="fs-5 mb-0">{city.name}</h3>
        <span className="fs-6 text-muted">({city.country})</span>
      </div>
      <div className="mt-2">
        {displayForecast ? (
          <p className="fs-4 mb-0">{Math.round(displayForecast.list[0].main.temp)}°C</p>
        ) : (
          <p className="fs-4 mb-0">Temperature not available</p>
        )}
      </div>
    </div>
  )
}
