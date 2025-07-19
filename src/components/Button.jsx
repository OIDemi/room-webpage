import LeftArrow from "../assets/icon-angle-left.svg?react";
import RightArrow from "../assets/icon-angle-right.svg?react";

export default function Button({
  className = "",
  onHandleNext,
  onHandlePrevious,
}) {
  return (
    <div role='Navigation Button' className={`${className}`}>
      <button
        className='bg-black w-[5.45rem] h-[4rem] flex justify-center items-center cursor-pointer hover:bg-grey-800'
        onClick={onHandlePrevious}
      >
        <LeftArrow />
      </button>
      <button
        className='bg-black w-[5.45rem] h-[4rem] flex justify-center items-center cursor-pointer hover:bg-grey-800'
        onClick={onHandleNext}
      >
        <RightArrow />
      </button>
    </div>
  );
}
