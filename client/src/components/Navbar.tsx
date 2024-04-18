/* eslint-disable @typescript-eslint/no-explicit-any */
import { navLinks } from '@/utils/navLinks';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className='bg-white border-b w-full md:static md:text-sm md:border-none'>
      <div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
          <a href='javascript:void(0)'>
            <img
              src='https://www.floatui.com/logo.svg'
              width={120}
              height={50}
              alt='Float UI logo'
            />
          </a>
          <div className='md:hidden'>
            <button
              className='text-gray-500 hover:text-app_primary_gray'
              onClick={() => setState(!state)}
            >
              {state ? (
                <XIcon className='w-6 h-6' />
              ) : (
                <MenuIcon className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className='justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
            {navLinks.map((item, idx) => {
              return (
                <li key={idx} className='text-gray-700 hover:text-primary_main'>
                  <a href={item.path} className='block'>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
              <li>
                <Link
                  to='/auth'
                  className='block py-3 text-center text-gray-700 hover:text-primary_main border rounded-lg md:border-none'
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to='/auth?register=true'
                  className='block py-3 px-4 font-medium text-center text-white bg-primary_main hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline'
                >
                  Register
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
