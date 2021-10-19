import { cloneElement, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Attribution from './Attribution';

export default function Deck({ className = '', children, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeydown = (e) => {
      //console.log('keydown', e);
      const key = e.key;
      switch (key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1
          );
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setCurrentIndex((prevIndex) =>
            prevIndex + 1 === children.length ? 0 : prevIndex + 1
          );
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [children.length]);

  // console.log('state:', currentIndex, children);

  return (
    <div
      className={`w-screen h-screen overflow-hidden ${className}`}
      {...props}
    >
      {children.map((child, i) =>
        cloneElement(child, {
          key: `slide-${i}`,
          isCurrent: currentIndex === i
        })
      )}
      <Attribution className="absolute top-6 right-6 space-x-4 flex items-center" />
      <div className="absolute bottom-6 left-6 space-x-4 flex items-center">
        <small className="text-main-600">
          {currentIndex + 1} / {children.length}
        </small>
      </div>
    </div>
  );
}

export function Slide({ className = '', isCurrent, ...props }) {
  return (
    <Transition
      show={isCurrent}
      appear={true}
      unmount={true}
      enter="transition-transform ease-in-out duration-200"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-200 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div
        style={{ padding: '25vh 15vw' }}
        className={`w-screen h-screen box-border overflow-hidden ${className}`}
        {...props}
      />
    </Transition>
  );
}
