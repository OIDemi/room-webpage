import LeftArrow from "../assets/icon-angle-left.svg?react";
import RightArrow from "../assets/icon-angle-right.svg?react";

export default function Button({
  className = "",
  onHandleNext,
  onHandlePrevious,
}) {
  return (
    <div aria-label='Navigation Button' className={`${className}`}>
      <div
        className='bg-black w-[5.45rem] h-[4rem] flex justify-center items-center cursor-pointer hover:bg-grey-800'
        onClick={onHandlePrevious}
      >
        <LeftArrow className=' ' />
      </div>
      <div
        className='bg-black w-[5.45rem] h-[4rem] flex justify-center items-center cursor-pointer hover:bg-grey-800'
        onClick={onHandleNext}
      >
        <RightArrow className='' />
      </div>
    </div>
  );
}
