import Link from 'next/link'
import React from 'react'


export default function HomePage() {
  return (
    <main className='flex flex-col w-full justify-center items-center min-h-screen bg-brand_color_100 text-brand_text'>
      <div className='flex flex-col max-w-[500px] text-center py-9'>
        <h1 className='text-xl font-semibold my-2'>Bem vindo ao AppName!</h1>
        <p>
          Uma plataforma para acompanhar seu candidato no detalhe e
          não perder nenhuma informação relevante para que seu voto
          seja consciente!
        </p>
      </div>

      <Link 
        className='p-5 bg-blue-400 rounded-md transition-opacity hover:opacity-90' 
        href={'/'}
      >Veja os candidatos de cada cargo</Link>
    </main>
  )
}
