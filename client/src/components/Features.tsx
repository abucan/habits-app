import { featuresList } from '@/utils/features';

export const Features = () => {
  return (
    <section className='relative py-14 md:py-28 bg-gray-900' id='features'>
      <div className='relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8'>
        <div className='max-w-xl'>
          <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
            Unlock Your Potential
          </h3>
          <p className='mt-3'>
            Discover the transformative power of habit tracking and unleash your
            full potential. Explore the myriad benefits awaiting you as you
            embark on your journey towards personal growth and self-improvement.
          </p>
        </div>
        <div className='mt-12 lg:mt-0'>
          <ul className='grid gap-8 sm:grid-cols-2'>
            {featuresList.map((item, idx) => {
              const { icon: Icon } = item;
              return (
                <li key={idx} className='flex gap-x-4'>
                  <div className='flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center'>
                    <Icon />
                  </div>
                  <div>
                    <h4 className='text-lg text-gray-100 font-semibold'>
                      {item.title}
                    </h4>
                    <p className='mt-3'>{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className='absolute inset-0 max-w-md mx-auto h-72 blur-[118px]'
        style={{
          background:
            'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
        }}
      ></div>
    </section>
  );
};
