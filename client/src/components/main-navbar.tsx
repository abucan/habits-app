import { MobileSidebar } from '.';
import { NavbarActions } from '.';

export const MainNavbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-4 py-6 h-full md:pr-4 border-b'>
        <MobileSidebar />
        <div className='flex flex-row items-center justify-center md:justify-between md:w-full'>
          <NavbarActions />
        </div>
      </div>
    </>
  );
};
