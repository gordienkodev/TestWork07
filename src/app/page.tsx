import { CityWeather } from '../components/CityWeather/CityWeather'
import { Search } from '../components/Search/Search'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <main
        className={`${styles.custom_gradient} d-flex flex-column gap-3 justify-content-center align-items-center vh-100 w-100`}
      >
        <Search />
        <CityWeather />
      </main>
    </div>
  )
}
