import { FeatureItemProps } from '@/ts/interfaces/app_interfaces';

export const FeatureItem = ({ icon, title, desc }: FeatureItemProps) => {
  const Icon = icon;
  return (
    <>
      <div className='text-primary_main pb-3'>
        <Icon />
      </div>
      <h4 className='text-lg text-app_primary_gray font-semibold'>{title}</h4>
      <p>{desc}</p>
    </>
  );
};
