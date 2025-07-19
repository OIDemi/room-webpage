import HamBurgerIcon from "./assets/icon-hamburger.svg?react";
import RoomLogo from "./assets/logo.svg?react";

export default function MenuNavbar({ setIsOpen }) {
  return (
    <header className='flex md:hidden items-center absolute gap-[5rem] top-[10%] '>
      <HamBurgerIcon
        className='text-white w-[5rem]'
        alt='Open Menu'
        aria-label='Open Menu'
        onClick={() => setIsOpen(true)}
      />
      <RoomLogo />
    </header>
  );
}
