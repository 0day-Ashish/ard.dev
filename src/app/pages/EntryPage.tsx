"use client";

import { useRouter } from 'next/navigation';
import LetterGlitch from '../components/LetterGlitch';
import { Dangrek } from 'next/font/google';

const dangrek = Dangrek({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function EntryPage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/home');
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <div className="absolute inset-0 w-full h-full">
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handleEnter}
          className={`px-8 py-3 bg-[#61dca3] text-black font-bold rounded-full 
                   hover:bg-[#61b3dc] transition-colors duration-300 
                   transform hover:scale-105 active:scale-95 z-10 ${dangrek.className}
                   text-lg md:text-xl`}
        >
          LAUNCH
        </button>
      </div>
    </div>
  );
}