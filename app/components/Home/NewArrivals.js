import Image from 'next/image'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ArrowLeft } from '@mui/icons-material';

const NewArrivals = () => {
  const arrivals = [
    {
      title: 'shirts',
      price: 100.0,
      image: '/images/shirt.webp',
    },
    {
      title: 'pants',
      price: 79.0,
      image: '/images/pants.webp',
    },
    {
      title: 'jackets',
      price: 249.0,
      image: '/images/jacket.webp',
    },
  ]

  return (
    <section className="flex flex-col gap-6 md:gap-12">
      <div className="w-full flex items-center justify-between">
        <h1 className="fade-in">new arrivals</h1>
        <div className="buttons hidden md:flex items-center gap-8">
          <button className='w-12 aspect-square rounded-full border border-primary flex items-center justify-center opacity-25'>
            <ArrowRightAltIcon className='rotate-180' />
          </button>
          <button className='w-12 aspect-square rounded-full border border-primary flex items-center justify-center'>
            <ArrowRightAltIcon />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-24 md:px-20">
        {arrivals.map((arrival, index) => (
          <div
            key={index}
            className="fade-in w-full md:w-1/3 flex flex-col justify-between gap-0"
          >
            <Image
              alt="quint"
              src={arrival.image}
              width={500}
              height={500}
              className="w-full aspect-[1/1]"
            />
            <h2 className="mt-4">{arrival.title}</h2>
            <p>${arrival.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
