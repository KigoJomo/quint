import React from 'react'
import BoxButton from '../BoxButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 md:gap-12 pt-16 md:pt-24">
      <h1 className=" text-center">
        comfortable & stylish <br className="hidden md:flex" /> clothes for
        every man.
      </h1>

      <p className="text-center text-sm leading-6">
        With Quint, find the comfortable and stylish clothes. Quint provides
        fast <br className="hidden md:flex" /> affordable fashion for men via a
        portfolio of over 20 different brands.
      </p>

      <BoxButton text={'shop collectios'} />

      <Image
        alt=""
        src="/images/hero.webp"
        width={1000}
        height={1000}
        className="w-full aspect-video md:aspect-[21/9] fade-in"
      />
    </section>
  )
}

export default Hero
