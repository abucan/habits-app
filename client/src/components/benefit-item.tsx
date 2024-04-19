import { BenefitItemProps } from '@/ts/interfaces/app_interfaces';

export const BenefitItem = ({ icon, title, desc }: BenefitItemProps) => {
  const Icon = icon;
  return (
    <>
      <div className='flex-none w-12 h-12 bg-gray-700 text-primary_blue rounded-lg flex items-center justify-center'>
        <Icon />
      </div>
      <div>
        <h4 className='text-lg text-gray-100 font-semibold'>{title}</h4>
        <p className='mt-3'>{desc}</p>
      </div>
    </>
  );
};
