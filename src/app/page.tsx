'use client';

import Header from '@/components/Header';
import Main from '@/components/Main';
import { useState } from 'react';

const Home = () => {
  const [light, setLight] = useState(false);

  return (
    <>
      <div
        className={`py-48P
      ${light ? 'bg-light-gradient' : 'bg-dark-gradient'}
      `}
      >
        <Header light={light} setLight={setLight} />
        <Main light={light} />
      </div>
    </>
  );
};

export default Home;
