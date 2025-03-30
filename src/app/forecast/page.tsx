import { ForecastOverview } from '../../components/ForecastOverview/ForecastOverview'
import styles from './page.module.scss'

export default function Forecast() {
  return (
    <div className={styles.page}>
      <main
        className={`${styles.custom_gradient} d-flex flex-column gap-3 justify-content-center align-items-center vh-100 w-100`}
      >
        <ForecastOverview />
      </main>
    </div>
  )
}
