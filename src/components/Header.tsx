'use client';

import logo from '@/images/logo.svg';
import logolight from '@/images/logolight.svg';
import sun from '@/images/icon-sun.svg';
import moon from '@/images/icon-moon.svg';
import Image from 'next/image';

const Header = ({
  light,
  setLight,
}: {
  light: boolean;
  setLight: (value: boolean) => void;
}) => {
  const changeTheme = () => {
    setLight(!light);
  };

  return (
    <header
      className={`flex justify-between items-center rounded-10BR px-16P py-8P max-w-[90dvw] mx-auto
    ${light ? 'bg-neutral-0' : 'bg-neutral-800'}
    `}
    >
      {light ? (
        <Image src={logo} alt="Extensions" />
      ) : (
        <Image src={logolight} alt="Extensions" />
      )}
      <div
        className={`p-16P relative rounded-10BR cursor-pointer focus:border focus:border-red-500
          ${light ? 'bg-neutral-200 hover:bg-neutral-300' : 'bg-neutral-700 hover:bg-neutral-600'}
          `}
        aria-label="dark mode or light mode"
        onClick={changeTheme}
      >
        {light ? (
          <Image src={moon} className="cursor-pointer" alt="moon" />
        ) : (
          <Image src={sun} className="cursor-pointer" alt="sun" />
        )}
      </div>
    </header>
  );
};

export default Header;
