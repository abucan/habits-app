import { SidebarProfileItem, SidebarRouteItem } from '.';
import { sidebarLinks } from '@/utils/sidebarLinks';

export const SidebarRoutes = () => {
  return (
    <div className='flex-1 flex flex-col h-full overflow-auto'>
      <ul className='px-4 space-y-1 text-sm font-medium flex-1'>
        {sidebarLinks.map((item, _) => {
          return <SidebarRouteItem {...item} />;
        })}
      </ul>
      <div>
        <div className='py-4 px-4 border-t'>
          <SidebarProfileItem />
        </div>
      </div>
    </div>
  );
};
