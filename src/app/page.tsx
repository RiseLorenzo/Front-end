import Image from 'next/image'
import HomePage from './home/home-page'
import Header from './modules/header/header'

export default function Home() {
  return (
    <main className='bg-brand_color_100 text-brand_text'>
      <HomePage />
    </main>
  )
}
