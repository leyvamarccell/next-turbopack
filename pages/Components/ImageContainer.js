import React from 'react'
import portada from '.././../public/portada.png'
import Image from 'next/image'

export default function ImageContainer() {
  return (
    <div>
        <Image src={portada} alt='Portada' className='ml-10 py-6 invisible md:visible'></Image>
    </div>
  )
}
