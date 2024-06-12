import { Header } from '@/components/Header/Header'
import { Slider } from '@/components/Slider/Slider'
import { Gallery } from '@/components/Gallery/Gallery'
import { Bio } from '@/components/Bio/Bio'
import { Contact } from '@/components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <Gallery />
      <Bio />
      <Contact />
    </main>
  )
}
