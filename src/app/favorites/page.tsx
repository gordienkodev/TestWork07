'use client'

import { FavoritesCity } from '@/components/FavoritesCity/FavoritesCity'
import { Header } from '@/components/Header/Header'
import { useFavorites } from '@/store/useFavorites'
import styles from './page.module.scss'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.custom_gradient} ${styles.main}`}>
        <FavoritesCity favoriteCities={favorites} />
      </main>
    </div>
  )
}
