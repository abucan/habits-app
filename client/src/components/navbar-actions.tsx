import { ModeToggle, UserLogout } from '.';
import { AddHabitDialog } from '.';
import { Button } from './ui/button';

export const NavbarActions = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full space-x-4 md:space-x-0'>
      <AddHabitDialog>
        <Button variant={'outline'} size={'sm'}>
          Add Habit
        </Button>
      </AddHabitDialog>
      <div className='flex flex-row justify-center items-center space-x-4'>
        <ModeToggle />
        <UserLogout />
      </div>
    </div>
  );
};
