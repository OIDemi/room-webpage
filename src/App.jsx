import { data } from "./data/data";
import darkImg from "./assets/image-about-dark.jpg";
import lightImg from "./assets/image-about-light.jpg";
import ArrowIcon from "./assets/icon-arrow.svg?react";
import MainLogo from "./assets/logo.svg";
import { useState } from "react";
import Button from "./components/Button";
export default function App() {
  const [count, setCount] = useState(0);

  function handleNext() {
    if (count === data.length - 1) return;
    setCount((next) => next + 1);
  }

  function handlePrevious() {
    if (count > 0) setCount((prev) => prev - 1);
  }
  return (
    <main className=' grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.4fr_1fr] lg:grid-rows-[2fr_0.3fr_1fr] lg:h-screen'>
      <section className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 relative '>
        <nav className='absolute hidden lg:flex items-center gap-14 top-[3rem] left-[3rem] '>
          <img src={MainLogo} alt='Room' />
          <ul className='flex gap-[2rem] text-white font-bold'>
            <li>
              <a href='#'>home</a>
            </li>
            <li>
              <a href='#'>shop</a>
            </li>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>contact</a>
            </li>
          </ul>
        </nav>
        <img src={data[count].image} alt={`Slider Image ${count + 1}`} />
        <Button
          className='absolute bottom-0 right-0 flex lg:hidden '
          onHandleNext={handleNext}
          onHandlePrevious={handlePrevious}
        />
      </section>
      <section className='lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 relative flex place-items-center '>
        <div className='w-[80%] mx-auto flex flex-col  justify-center py-[4rem] lg:py-[0] gap-[1rem]'>
          <h1 className=' text-semibold-mobile lg:text-semibold font-semibold'>
            {data[count].heading}
          </h1>
          <p className='text-grey-500 font-medium'>{data[count].text}</p>

          <a href='#' className=' inline-flex gap-3 items-center'>
            <p>SHOP NOW</p>
            <ArrowIcon />
          </a>
        </div>
        <Button
          className='absolute bottom-0 left-0 hidden lg:flex '
          onHandleNext={handleNext}
          onHandlePrevious={handlePrevious}
        />
      </section>
      <section>
        <img src={darkImg} alt='Grid Image 3' />
      </section>
      <section className=' lg:-col-start-4 lg:-col-end-2 w-[80%] mx-auto flex flex-col justify-center py-[4rem] lg:py-0 gap-[1rem]'>
        <h2 className='text-bold font-semibold tracking-[10px]'>
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
