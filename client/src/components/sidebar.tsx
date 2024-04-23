import { Logo } from './logo';
import { SidebarRoutes } from '.';

export const Sidebar = () => {
  return (
    <>
      <nav className='fixed top-0 left-0 h-full md:border-r bg-white space-y-8 w-full md:w-80'>
        <div className='flex flex-col h-full'>
          <div className='h-20 flex items-center px-2'>
            <a className='flex-none'>
              <Logo footer />
            </a>
          </div>
          <SidebarRoutes />
        </div>
      </nav>
    </>
  );
};
