import { data } from "./data/data";
import darkImg from "./assets/image-about-dark.jpg";
import lightImg from "./assets/image-about-light.jpg";
import ArrowIcon from "./assets/icon-arrow.svg?react";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className=' grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.4fr_1fr] lg:grid-rows-[2fr_0.3fr_1fr] h-screen'>
      <section className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3'>
        <img src={data[count].image} alt={`Slider Image ${count + 1}`} />
      </section>
      <section className='lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-[80%] mx-auto flex flex-col justify-center py-[4rem] lg:py-0 gap-[1rem]'>
        <hcount className=' text-semibold-mobile lg:text-semibold font-semibold'>
          {data[count].heading}
        </hcount>
        <p className='text-grey-500 font-medium'>{data[2].text}</p>

        <a href='#' className=' inline-flex gap-3 items-center'>
          <p>SHOP NOW</p>
          <ArrowIcon />
        </a>
      </section>
      <section>
        <img src={darkImg} alt='Grid Image 3' />
      </section>
      <section className=' lg:-col-start-4 lg:-col-end-2 w-[80%] mx-auto flex flex-col justify-center py-[4rem] lg:py-0 gap-[1rem]'>
        <h2 className='text-bold font-semibold tracking-[1em]'>
          ABOUT OUR FURNITURE
        </h2>
        <p className='text-grey-500 font-medium'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </section>
      <section>
        <img src={lightImg} alt='Grid Image 4' />
      </section>
    </main>
  );
}
