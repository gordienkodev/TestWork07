'use client'
import { useState, ChangeEvent } from 'react'
import useDebounce from '../app/utils/useDebounce'

const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0/direct'
const LIMIT = 5
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

type optionType = {
  name: string
  country: string
  lat: number
  lon: number
}

export const useCitySearch = () => {
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<optionType[]>([])
  const [selectedOption, setSelectedOption] = useState<optionType | null>(null)

  const fetchCities = async (query: string) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?q=${query.trim()}&limit=${LIMIT}&appid=${API_KEY}`
      )
      if (!response.ok) throw new Error('Error fetching cities')

      const data = await response.json()
      setOptions(
        data.map((item: optionType) => ({
          name: item.name,
          country: item.country,
          lat: item.lat,
          lon: item.lon,
        }))
      )
    } catch (error) {
      console.error('Error fetching cities:', error)
    }
  }

  const debouncedFetch = useDebounce(() => {
    if (term) fetchCities(term)
  }, 500)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
    if (e.target.value === '') setOptions([])
    debouncedFetch()
  }

  const onOptionSelect = (option: optionType) => {
    setTerm(option.name)
    setSelectedOption(option)
    setOptions([])
  }

  return { term, options, selectedOption, onInputChange, onOptionSelect }
}
