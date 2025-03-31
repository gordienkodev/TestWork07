'use client'

import Link from 'next/link'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Search
        </Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
      </nav>
    </header>
  )
}
