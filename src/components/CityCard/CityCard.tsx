'use client'

import { useEffect, useState } from 'react'
import { useForecast } from '../../hooks/useForecast'
import { useRouter } from 'next/navigation'
import styles from './CityCard.module.scss'
import { useCurrentSearch } from '../../store/useCurrentSearch'

interface City {
  name: string
  country: string
  lat: number
  lon: number
}

interface CityCardProps {
  city: City
}

export const CityCard = ({ city }: CityCardProps) => {
  const { forecast, loading, error, fetchForecast } = useForecast()
  const [isFetched, setIsFetched] = useState(false)
  const router = useRouter()
  const { setCurrentSearch } = useCurrentSearch()
  const handleCardClick = () => {
    setCurrentSearch(city)
    router.push(`/forecast`)
  }

  useEffect(() => {
    if (!isFetched) {
      fetchForecast(city)
      setIsFetched(true)
    }
  }, [city, fetchForecast, isFetched])

  if (loading) {
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
        {forecast ? (
          <p className="fs-4 mb-0">{Math.round(forecast.list[0].main.temp)}°C</p>
        ) : (
          <p className="fs-4 mb-0">Temperature not available</p>
        )}
      </div>
    </div>
  )
}
