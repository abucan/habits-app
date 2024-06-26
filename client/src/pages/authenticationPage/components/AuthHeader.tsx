import { AuthHeaderProps } from '@/ts/interfaces/app_interfaces';

export const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className='grid gap-2 text-left'>
      <div>
        <h1 className='text-3xl font-bold'>{title}</h1>
      </div>
      <p className='text-balance text-muted-foreground'>{description}</p>
    </div>
  );
};
