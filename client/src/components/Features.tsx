import { featuresList } from '@/utils/featuresList';
import { FeatureItem } from '.';
import { FEATURE_DESC, FEATURE_TITLE } from '@/utils/constants';

export const Features = () => {
  return (
    <section className='py-14' id='features'>
      <div className='max-w-screen-xl mx-auto px-4 text-app_secondary_gray md:px-8'>
        <div className='relative max-w-2xl mx-auto sm:text-center'>
          <div className='relative z-10'>
            <h3 className='text-app_primary_gray text-3xl font-semibold sm:text-4xl'>
              {FEATURE_TITLE}
            </h3>
            <p className='mt-3'>{FEATURE_DESC}</p>
          </div>
        </div>
        <div className='relative mt-12'>
          <ul className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {featuresList.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className='bg-white space-y-3 p-4 border rounded-lg'
                >
                  <FeatureItem {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
