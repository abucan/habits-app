import { express, vite, ts, mongodb } from '@/assets/showcase_logos';
import { TECH_STACK, TECH_STACK_DESC } from '@/utils/constants';

export const LogoShowcase = () => {
  return (
    <div className='py-14' id='tech'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-xl mx-auto text-center'>
          <h3 className='text-app_primary_gray text-3xl font-semibold sm:text-4xl'>
            {TECH_STACK}
          </h3>
          <p className='text-app_secondary_gray mt-3'>{TECH_STACK_DESC}</p>
        </div>
        <div className='mt-12 flex justify-center'>
          <ul className='inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4'>
            <li>
              <img src={vite} alt='' className='my-auto w-16' />
            </li>
            <li>
              <img src={ts} alt='' className='my-auto w-16' />
            </li>
            <li>
              <img src={mongodb} alt='' className='my-auto w-16' />
            </li>
            <li>
              <img src={express} alt='' className='my-auto w-16' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
