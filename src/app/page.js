import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>I am Naimur</h2>
      <h2>I am Parvez</h2>
      <h2>I am Sajib</h2>
      <h2>I am Mahabub</h2>
    </main>
  )
}
