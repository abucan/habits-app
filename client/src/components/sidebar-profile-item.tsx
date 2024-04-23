import { useAppSelector } from '@/store/configureStore';

export const SidebarProfileItem = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className='flex items-center gap-x-4'>
      <img
        src='https://randomuser.me/api/portraits/women/79.jpg'
        className='w-12 h-12 rounded-full'
      />
      <div>
        <span className='block text-gray-700 text-sm font-semibold'>
          {user && user.name}
        </span>
        <a className='block mt-px text-gray-600 hover:text-indigo-600 text-xs'>
          View profile
        </a>
      </div>
    </div>
  );
};
