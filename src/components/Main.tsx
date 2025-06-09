'use client';

import { useState } from 'react';
import Image from 'next/image';
import devlens from '@/images/logo-devlens.svg';
import stylespy from '@/images/logo-style-spy.svg';
import speedboost from '@/images/logo-speed-boost.svg';
import jsonwizard from '@/images/logo-json-wizard.svg';
import tabmaster from '@/images/logo-tab-master-pro.svg';
import viewportbuddy from '@/images/logo-viewport-buddy.svg';
import markupnotes from '@/images/logo-markup-notes.svg';
import gridguides from '@/images/logo-grid-guides.svg';
import pallettepicker from '@/images/logo-palette-picker.svg';
import linkchecker from '@/images/logo-link-checker.svg';
import domsnapshot from '@/images/logo-dom-snapshot.svg';
import consoleplus from '@/images/logo-console-plus.svg';

const Main = ({ light }: { light: boolean }) => {
  const [cards, setCards] = useState([
    {
      name: 'DevLens',
      icon: devlens,
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      active: true,
    },
    {
      name: 'StyleSpy',
      icon: stylespy,
      description: 'Instantly analyze and copy CSS from any webpage element.',
      active: true,
    },
    {
      name: 'SpeedBoost',
      icon: speedboost,
      description:
        'Optimizes browser resource usage to accelerate page loading.',
      active: false,
    },
    {
      name: 'JSONWizard',
      icon: jsonwizard,
      description:
        'Formats, validates, and prettifies JSON responses in-browser.',
      active: true,
    },
    {
      name: 'TabMaster Pro',
      icon: tabmaster,
      description: 'Organizes browser tabs into groups and sessions.',
      active: true,
    },
    {
      name: 'ViewportBuddy',
      icon: viewportbuddy,
      description:
        'Simulates various screen resolutions directly within the browser.',
      active: false,
    },
    {
      name: 'Markup Notes',
      icon: markupnotes,
      description:
        'Enables annotation and notes directly onto webpages for collaborative debugging.',
      active: true,
    },
    {
      name: 'GridGuides',
      icon: gridguides,
      description:
        'Overlay customizable grids and alignment guides on any webpage.',
      active: false,
    },
    {
      name: 'Palette Picker',
      icon: pallettepicker,
      description: 'Instantly extracts color palettes from any webpage.',
      active: true,
    },

    {
      name: 'LinkChecker',
      icon: linkchecker,
      description: 'Scans and highlights broken links on any page.',
      active: true,
    },
    {
      name: 'DOM Snapshot',
      icon: domsnapshot,
      description: 'Capture and export DOM structures quickly.',
      active: false,
    },
    {
      name: 'ConsolePlus',
      icon: consoleplus,
      description:
        'Enhanced developer console with advanced filtering and logging.',
      active: true,
    },
  ]);

  const [option, setOption] = useState<'all' | 'active' | 'inactive'>('all');

  const handleOptions = (option: 'all' | 'active' | 'inactive') => {
    setOption(option);
  };

  const toggleActive = (index: number) => {
    const updatedCards = [...cards];
    updatedCards[index].active = !updatedCards[index].active;
    setCards(updatedCards);
  };

  const filteredCards = cards.filter((card) => {
    if (option === 'active') return card.active;
    else if (option === 'inactive') return !card.active;
    return true;
  });

  return (
    <main className="max-w-[90dvw] mx-auto">
      {/* Control Panel */}
      <div className="flex flex-col justify-between items-center gap-2 mt-64M md:flex-row">
        <h1
          className={`text-xl font-bold
          ${light ? 'text-neutral-900' : 'text-neutral-0'}
          `}
        >
          Extensions List
        </h1>
        <ul className="flex justify-center items-center gap-2">
          <li
            className={`
              rounded-20BR border border-neutral-600 px-16P py-8P cursor-pointer focus:border focus:border-red-500
              ${light ? 'bg-neutral-0 text-neutral-800 hover:text-neutral-700 hover:bg-neutral-200' : 'bg-neutral-800 text-neutral-0 hover:bg-neutral-500'}
            ${light && option === 'all' && 'bg-red-500 hover:bg-red-400'}
            ${!light && option === 'all' && 'bg-red-400 hover:bg-red-500'}
            `}
            onClick={() => handleOptions('all')}
          >
            All
          </li>
          <li
            className={`
              rounded-20BR border border-neutral-600 px-16P py-8P cursor-pointer focus:border focus:border-red-500
              ${light ? 'bg-neutral-0 text-neutral-800 hover:text-neutral-700 hover:bg-neutral-200' : 'bg-neutral-800 text-neutral-0 hover:bg-neutral-500'}
            ${light && option === 'active' && 'bg-red-500 hover:bg-red-400'}
            ${!light && option === 'active' && 'bg-red-400 hover:bg-red-500'}
            `}
            onClick={() => handleOptions('active')}
          >
            Active
          </li>
          <li
            className={`
              rounded-20BR border border-neutral-600 px-16P py-8P cursor-pointer focus:border focus:border-red-500
              ${light ? 'bg-neutral-0 text-neutral-800 hover:text-neutral-700 hover:bg-neutral-200' : 'bg-neutral-800 text-neutral-0 hover:bg-neutral-500'}
            ${light && option === 'inactive' && 'bg-red-500 hover:bg-red-400'}
            ${!light && option === 'inactive' && 'bg-red-400 hover:bg-red-500'}
            `}
            onClick={() => handleOptions('inactive')}
          >
            Inactive
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-16M grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.map((card, index) => (
          <div
            className={`flex flex-col justify-between items-center rounded-10BR border border-neutral-600 px-16P py-8P min-w-container-200 w-full max-w-container-400 h-200H px-16P py-16P mx-auto
              ${light ? 'text-neutral-900 bg-neutral-0' : 'text-neutral-0 bg-neutral-800'}
              `}
            key={index}
          >
            <div className="flex justify-start items-start gap-5">
              <Image
                className="w-64W h-64H z-50 relative"
                width={64}
                height={64}
                src={card.icon}
                alt="devlens"
              />
              <div className="">
                <h2 className="text-lg font-bold">{card.name}</h2>
                <p
                  className={`${light ? 'text-neutral-600' : 'text-neutral-300'}`}
                >
                  {card.description}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div
                typeof="button"
                className={`w-96W h-24H rounded-[999px] border px-16P pt-1 pb-7 cursor-pointer hover:bg-red-500 focus:border focus:border-red-500
                  ${light ? 'bg-neutral-0 text-neutral-800 border-neutral-900 hover:text-neutral-0' : 'bg-neutral-800 text-neutral-0 border-neutral-600 hover:text-neutral-900'}
                  `}
              >
                Remove
              </div>
              <label
                onClick={() => toggleActive(index)}
                className={`${card.active ? `bg-red-400` : `bg-neutral-600`} rounded-full p-3.2P cursor-pointer label hover:bg-red-500 focus:border focus:border-red-500
                `}
                aria-label="toggle active mode"
              >
                {!card.active ? (
                  <>
                    <div className="bg-neutral-0 rounded-full w-16W h-16H"></div>
                    <div className="w-16W h-16H"></div>
                  </>
                ) : (
                  <>
                    <div className="w-16W h-16H"></div>
                    <div className="bg-neutral-0 rounded-full w-16W h-16H"></div>
                  </>
                )}
              </label>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
