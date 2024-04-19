import { benefitsList } from '@/utils/benefitsList';
import { BenefitItem } from '.';
import { BENEFIT_DESC, BENEFIT_TITLE } from '@/utils/constants';

export const Benefits = () => {
  return (
    <section className='relative py-28 md:py-28 bg-gray-900' id='benefits'>
      <div className='relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8'>
        <div className='max-w-xl'>
          <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
            {BENEFIT_TITLE}
          </h3>
          <p className='mt-3'>{BENEFIT_DESC}</p>
        </div>
        <div className='mt-12 lg:mt-0'>
          <ul className='grid gap-8 sm:grid-cols-2'>
            {benefitsList.map((item, idx) => {
              return (
                <li key={idx} className='flex gap-x-4'>
                  <BenefitItem {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='custom-shape-divider-top-1713521912'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
    </section>
  );
};
