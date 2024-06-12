import Image from 'next/image'
import styles from './page.module.scss'
import { Header } from '@/components/Header/Header'
import { Slider } from '@/components/Slider/Slider'
import { Gallery } from '@/components/Gallery/Gallery'
import { Bio } from '@/components/Bio/Bio'
import { Contact } from '@/components/Contact/Contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Slider />
      <Gallery />
      <Bio />
      <Contact />
    </main>
  )
}
