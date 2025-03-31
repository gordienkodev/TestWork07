export interface ICity {
  name: string
  country: string
  lat: number
  lon: number
}

export interface ICityCardProps {
  city: ICity
}

export type TCurrentSearchState = {
  currentSearch: ICity | null
  setCurrentSearch: (city: ICity) => void
}

export type TForecastType = {
  name: string
  country: string
  list: {
    dt: number
    main: {
      feels_like: number
      humidity: number
      pressure: number
      temp: number
      temp_max: number
      temp_min: number
    }
    weather: {
      main: string
      icon: string
      description: string
    }[]
    wind: {
      speed: number
      gust: number
      deg: number
    }
    clouds: {
      all: number
    }
    pop: number
    visibility: number
  }[]
  sunrise: number
  sunset: number
}

export interface ICityWeatherProps {
  forecast: TForecastType
  selectedCity: ICity
}

export interface IFavoriteButtonProps {
  selectedCity: ICity
}

export interface IFavoritesCityProps {
  favoriteCities: ICity[]
}

export interface IForecastOverviewProps {
  forecast: TForecastType
  currentSearch: ICity
}

export type TDailyForecast = {
  date: string
  temp: number
  feels_like: number
  humidity: number
  wind: number
  description: string
  icon: string
}

export interface ISearchProps {
  onSearchSubmit: (selectedCity: ICity) => void
}

export interface IWeatherData {
  city: {
    name: string
  }
  list: {
    main: {
      temp: number
    }
  }[]
}

export type TSearchHistoryState = {
  history: ICity[]
  addSearch: (city: ICity) => void
  getCityForecast: (name: string, country: string) => ICity | undefined
}

export interface IWeatherStore {
  city: ICity
  setCity: (city: ICity) => void
}

export interface IFavoritesStore {
  favorites: ICity[]
  addToFavorites: (city: ICity) => void
  removeFromFavorites: (city: ICity) => void
}
