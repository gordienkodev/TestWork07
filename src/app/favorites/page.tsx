import { FavoritesCity } from '../../components/FavoritesCity/FavoritesCity'
import styles from './page.module.scss'

export default function Favorites() {
  return (
    <div className={styles.page}>
      <main
        className={`${styles.custom_gradient} d-flex flex-column gap-3 justify-content-center align-items-center vh-100 w-100`}
      >
        <FavoritesCity />
      </main>
    </div>
  )
}
