import { useState, useEffect } from 'react';
import { SheetTrigger, SheetContent, Sheet } from './ui/sheet';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from '.';

export const MobileSidebar = () => {
  const [open, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger className='md:hidden hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
