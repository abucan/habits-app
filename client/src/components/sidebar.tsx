import { benefitsList } from '@/utils/benefitsList';
import { navLinks } from '@/utils/navLinks';
import { Logo } from './logo';

export const Sidebar = () => {
  return (
    <>
      <nav className='fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80'>
        <div className='flex flex-col h-full'>
          <div className='h-20 flex items-center px-2'>
            <a href='javascript:void(0)' className='flex-none'>
              <Logo footer />
            </a>
          </div>
          <div className='flex-1 flex flex-col h-full overflow-auto'>
            <ul className='px-4 text-sm font-medium flex-1'>
              {benefitsList.map((item, idx) => {
                const { icon: Icon } = item;
                return (
                  <li key={idx}>
                    <a
                      href={item.title}
                      className='flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150'
                    >
                      <div className='text-gray-500'>
                        <Icon />
                      </div>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div>
              {/* <ul className="px-4 pb-4 text-sm font-medium">
                            {
                                navsFooter.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                            <div className="text-gray-500">{item.icon}</div>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul> */}
              <div className='py-4 px-4 border-t'>
                <div className='flex items-center gap-x-4'>
                  <img
                    src='https://randomuser.me/api/portraits/women/79.jpg'
                    className='w-12 h-12 rounded-full'
                  />
                  <div>
                    <span className='block text-gray-700 text-sm font-semibold'>
                      Alivika tony
                    </span>
                    <a
                      href='javascript:void(0)'
                      className='block mt-px text-gray-600 hover:text-indigo-600 text-xs'
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
