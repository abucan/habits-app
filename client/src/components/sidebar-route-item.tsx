import { cn } from '@/lib/utils';
import { SidebarRouteItemProps } from '@/ts/interfaces/app_interfaces';

export const SidebarRouteItem = ({
  title,
  icon: Icon,
  href,
}: SidebarRouteItemProps) => {
  // get pathname
  const path = window.location.pathname;
  console.log(path);

  return (
    <li key={title}>
      <a
        href={href}
        className={cn(
          'flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-200 hover:text-black duration-150',
          path === href && 'bg-gray-200 text-black',
        )}
      >
        <div
          className={cn(
            'text-gray-500 hover:text-black duration-150',
            path === href && 'text-black',
          )}
        >
          <Icon />
        </div>
        {title}
      </a>
    </li>
  );
};
