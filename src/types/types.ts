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

export interface IWeatherStore {
  city: ICity
  setCity: (city: ICity) => void
}

export interface IFavoritesStore {
  favorites: ICity[]
  addToFavorites: (city: ICity) => void
  removeFromFavorites: (city: ICity) => void
}

export interface IApiResponse {
  city: ICity
  list: TForecastType['list']
}

export interface ICityWithForecast extends ICity {
  forecast?: TForecastType
}

export type TSearchHistoryState = {
  history: Array<ICity & { forecast?: TForecastType }>
  addSearch: (city: ICity & { forecast?: TForecastType }) => void
  getCityForecast: (
    name: string,
    country: string
  ) => (ICity & { forecast?: TForecastType }) | undefined
}
