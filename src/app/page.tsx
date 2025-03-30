import { Search } from '../components/Search'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <main
        className={`${styles.custom_gradient} d-flex justify-content-center align-items-center vh-100 w-100`}
      >
        <Search />
      </main>
    </div>
  )
}
