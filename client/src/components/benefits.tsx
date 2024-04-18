import { benefitsList } from '@/utils/benefitsList';
import { BenefitItem } from '.';
import { BENEFIT_DESC, BENEFIT_TITLE } from '@/utils/constants';

export const Benefits = () => {
  return (
    <section className='relative py-14 md:py-28 bg-gray-900' id='benefits'>
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
      {/* <div
        className='absolute inset-0 max-w-md mx-auto h-72 blur-[118px]'
        style={{
          background:
            'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
        }}
      ></div> */}
    </section>
  );
};
