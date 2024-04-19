import logo from '../assets/logo/logo.svg';
import dark_logo from '../assets/logo/dark-logo.svg';

export const Logo = ({
  width = 128,
  footer = false,
  isDark = false,
}: {
  width?: number;
  footer?: boolean;
  isDark?: boolean;
}) => {
  return (
    <>
      {!isDark ? (
        <img
          src={logo}
          className={`${footer ? 'mx-auto' : ''}`}
          width={width}
          alt='Daily Logo'
        />
      ) : (
        <img
          src={dark_logo}
          className={`${footer ? 'mx-auto' : ''}`}
          width={width}
          alt='Daily Dark Logo'
        />
      )}
    </>
  );
};
