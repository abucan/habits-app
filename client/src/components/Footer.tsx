import { MoveRight } from 'lucide-react';
import { navLinks } from '@/utils/navLinks';
import { FOOTER_DESC } from '@/utils/constants';
import { ButtonEnums } from '@/ts/enums/app_enums';
import { Logo } from './logo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='pt-10'>
      <div className='max-w-screen-xl mx-auto px-4 text-app_secondary_gray md:px-8'>
        <div className='space-y-6 sm:max-w-md sm:mx-auto sm:text-center'>
          <Logo footer />
          <p>{FOOTER_DESC}</p>
          <div className='items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0'>
            <Link
              to='/auth'
              className='flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex'
            >
              {ButtonEnums.START_NOW}
              <MoveRight className='h-5 w-5' />
            </Link>
          </div>
        </div>
        <div className='mt-10 py-10 border-t items-center justify-between sm:flex'>
          <p className='text-gray-300'>
            {`© ${new Date().getFullYear()} Daily Inc. All rights reserved.`}
          </p>
          <ul className='flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0'>
            {navLinks.map((item, idx) => (
              <li className='text-app_primary_gray hover:text-gray-500 duration-150'>
                <a key={idx} href={item.path}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
