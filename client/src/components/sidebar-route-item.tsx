import { SidebarRouteItemProps } from '@/ts/interfaces/app_interfaces';

export const SidebarRouteItem = ({
  title,
  icon: Icon,
  href,
}: SidebarRouteItemProps) => {
  return (
    <li key={title}>
      <a
        href={href}
        className='flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150'
      >
        <div className='text-gray-500'>
          <Icon />
        </div>
        {title}
      </a>
    </li>
  );
};
