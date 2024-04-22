import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';
import { AddHabitDialogProps } from '@/ts/interfaces/app_interfaces';
import { AddHabitForm } from '.';

export const AddHabitDialog = ({ children }: AddHabitDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='bg-transparent w-full p-1 md:p-0'>
        <AddHabitForm />
      </DialogContent>
    </Dialog>
  );
};
