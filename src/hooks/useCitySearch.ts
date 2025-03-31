'use client'
import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import useDebounce from '../app/utils/useDebounce'
import { ICity } from '../types/types'

const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0/direct'
const LIMIT = 5
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const useCitySearch = () => {
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<ICity[]>([])
  const [selectedOption, setSelectedOption] = useState<ICity | null>(null)

  const fetchCities = async (query: string) => {
    try {
      const { data } = await axios.get<ICity[]>(GEO_API_URL, {
        params: {
          q: query.trim(),
          limit: LIMIT,
          appid: API_KEY,
        },
      })
      setOptions(
        data.map(item => ({
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

  const onOptionSelect = (option: ICity) => {
    setTerm(option.name)
    setSelectedOption(option)
    setOptions([])
  }

  return { term, options, selectedOption, onInputChange, onOptionSelect }
}
