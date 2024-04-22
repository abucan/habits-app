import { LogOut } from 'lucide-react';
import { Button } from './ui/button';

export const UserLogout = () => {
  return (
    <Button variant={'outline'} size={'sm'}>
      <LogOut className='h-4 w-4' />
    </Button>
  );
};
