import { Jost } from 'next/font/google'
import './globals.scss'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Forest House',
  description: 'Дух леса в каждой свече. Магия света и аромата',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
