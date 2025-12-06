"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Particles from '../components/bg';
import Magnet from '../components/Magnet';
import DecayCard from '../components/DecayCard';
import ScrambledText from '../components/ScrambledText';
import { Timeline } from '../components/Skills';
import ShinyText from '../components/ShinyText';
import { PlaceholdersAndVanishInput } from '../components/placeholder';
import CurvedLoop from '../components/CurvedLoop';
import TiltedCard from '../components/TiltedCard';

export default function HomePage() {
  const navMenuRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.85]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorBlack, setCursorBlack] = useState(false);
  const [cursorExpand, setCursorExpand] = useState(true);
  const [showNav, setShowNav] = useState(false);
  
  useEffect(() => {
    if (!showNav) return;
    function handleClickOutside(event: MouseEvent) {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
        setShowNav(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);
   
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Built & Explored Events, Hackathons, Projects on blockchain globally and brought in sponsors like Harley , BMW etc., This year gave me a lot to learn and grow.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/sponsor.jpeg" alt="startup template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/monad.jpeg" alt="startup template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/iem3.jpeg" alt="startup template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/monad2.png" alt="startup template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/semicolon.jpeg" alt="startup template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/algorand.png" alt="startup template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">First Year of college.</p>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">I&apos;ve been working freelance since two years and here are some of the projects I worked on.</p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/canop.png" alt="eventabc" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/iem2.jpeg" alt="monad_project" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/blocktix.png" alt="bento template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/fitmonk-1.png" alt="coredao" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Peak Era ",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">4 coding tips i&apos;d kill to tell my 17 y/o self :</p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">• Coding is very hard at first</div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">• Interviews are harder than job</div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">• Do EVERYTHING to land an internship</div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">• Build endless shits !</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/port.png" alt="hero template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/random.png" alt="feature template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/image.png" alt="bento template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <Image src="/random2.png" alt="cards template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const handleMouseDown = () => {
      setCursorExpand(false);
    };
    const handleMouseUp = () => {
      setCursorExpand(true);
    };
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-black text-white relative overflow-x-hidden cursor-none px-3 sm:px-0" style={{ cursor: 'none', zIndex: 1 }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Particles particleColors={['#ffffff', '#ffffff']} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
      </div>
 
      <div style={{ position: 'fixed', left: cursor.x - 10, top: cursor.y - 10, width: 20, height: 20, zIndex: 9999, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <line x1="10" y1="9" x2="10" y2="5" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateY(-4px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
          <line x1="10" y1="11" x2="10" y2="15" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateY(4px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
          <line x1="9" y1="10" x2="5" y2="10" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateX(-4px)' : 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
          <line x1="11" y1="10" x2="15" y2="10" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
        </svg>
      </div>

      <section className="w-full h-screen flex flex-col items-center justify-center px-2 sm:px-4 py-10 relative mt-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }} className="flex flex-col items-center justify-center w-full">
          <div className="space-y-2 leading-[0.9] flex flex-col items-center tracking-widest mt-[-7rem] md:mt-[-4rem] lg:mt-[2rem]">
            <h1 className="text-4xl sm:text-4xl md:text-8xl font-bold uppercase text-center tracking-widest" style={{ marginTop: '0', marginBottom: '0' }}>MULTI–</h1>
            <h1 className="text-4xl sm:text-4xl md:text-8xl font-bold uppercase text-center tracking-widest" style={{ marginTop: '0', marginBottom: '0' }}>DISCIPLINARY</h1>
            <h1 className="text-4xl sm:text-4xl md:text-8xl font-bold uppercase text-center tracking-widest" style={{ marginTop: '0', marginBottom: '0' }}>DEVELOPER</h1>
          </div>
          <div className="text-xs md:text-xs text-white-300 max-w-sm absolute right-24 md:right-36 mt-32 md:mt-52" style={{marginRight: 0}}>
            <div className="hidden sm:block">
              <p className='text-right' style={{ position: 'relative', right: '4.2rem' }}>CREATIVE THINKING AND PROBLEM</p>
              <p style={{ position: 'relative', right: '3.8rem' }}>SOLVING ARE WHERE MY MIND WANDERS,</p>
              <p style={{ position: 'relative', right: '3.8rem' }}>USING MY KNOWLEDGE AND PASSION FOR</p>
              <p style={{ position: 'relative', right: '3.8rem' }}>DESIGN AS MY MEDIUM.</p>
            </div>
            <div className="justify-center items-center mt-4 sm:hidden">
              <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center" style={{ marginLeft: '-7.3rem' }}>
                <span className="text-xl">↓</span>
              </div>
            </div>
          </div>
          <div className="justify-center items-center mt-16 hidden sm:flex">
            <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
              <span className="text-2xl">↓</span>
            </div>
          </div>
        </motion.div>
        <div className="absolute left-0 flex flex-col items-start" style={{ top: '11.5rem', left: '5rem' }}>
          <span className="mt-4 flex items-center text-white tracking-widest" style={{ fontSize: '0.7rem', marginTop: '0.5rem', position: 'relative', top: '0' }}>
            <span className="flex items-center gap-1 sm:hidden" style={{ fontSize: '0.6rem', top: '-6.2rem', position: 'relative', left: '-2.5rem' }}>
              01//04 - SCROLL
              <svg width="10" height="10" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle ml-1"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-xs md:text-xs" style={{ position: 'relative', top: '0' }}>
              01//04 - SCROLL
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle ml-1"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </span>
        </div>
      </section>
      
      <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
      <section id="about" className="about min-h-screen py-10 px-2 sm:px-4 md:px-8 flex flex-col">
        <div className="w-full flex justify-center items-center mb-12 mt-8 relative">
          <div className="absolute flex flex-col items-start" style={{ top: '-1.5rem', left: '1.2rem' }}>
            <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-center text-white md:ml-24">
              02
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
          <Magnet padding={50} magnetStrength={50}>
            <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">ABOUT</p>
          </Magnet>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full flex-1">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start pl-0 md:pl-16 text-lg sm:text-xl md:text-2xl" style={{ marginTop: '2rem' }}>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <ScrambledText className="scrambled-text-demo" radius={100} duration={1.2} speed={0.5} scrambleChars="{}:.">
                19 y/o Full-stack Dev passionate about design, AI/ML and Web3 — turning ideas into interactive,intelligent and decentralized <span style={{ display: 'block' }}>experiences.</span>
              </ScrambledText>
              <div className="hidden md:flex flex-row gap-6 mt-8 justify-start md:pl-12">
                <Link href="https://github.com/0day-Ashish" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/ashish-ranjan-das%E2%86%97-530512198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-400">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                    <path strokeWidth="2" d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.105.895-2 2-2s2 .895 2 2v7"/>
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/ashishh_rd_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-pink-400">
                    <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                  </svg>
                </Link>
                <Link href="https://x.com/Ashishrd06" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0012.07 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C5.09 9.37 3.13 8.29 1.671 6.684c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.103-.775.158-1.186.158-.29 0-.57-.028-.844-.08.57 1.78 2.223 3.078 4.183 3.113A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.253 0 12.77-6.835 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.6.713z" />
                      </svg>
                </Link>
                </div>
              <div className="hidden md:block mb-8" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center pr-0 md:pr-16 mt-8 md:mt-0">
            <DecayCard width={320} height={400} image="/me.png" />
            <div className="flex flex-row gap-6 mt-6 justify-center md:hidden">
              <Link href="https://github.com/0day-Ashish" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/ashish-ranjan-das%E2%86%97-530512198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                  <path strokeWidth="2" d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.105.895-2 2-2s2 .895 2 2v7"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/ashishh_rd_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-pink-400">
                  <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </Link>
              <Link href="https://x.com/Ashishrd06" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0012.07 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C5.09 9.37 3.13 8.29 1.671 6.684c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.103-.775.158-1.186.158-.29 0-.57-.028-.844-.08.57 1.78 2.223 3.078 4.183 3.113A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.253 0 12.77-6.835 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.6.713z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
      </section>
        <section id="skills" className="skills min-h-screen py-10 px-2 sm:px-4 md:px-8 flex flex-col">
          <div className="w-full flex flex-col items-center mb-12 mt-8 relative">
            <div className="absolute left-0 flex flex-col items-start" style={{ top: '-3rem', right: '2rem', left: '1.2rem' }}>
              <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-left justify-start text-white">03
                <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            <Magnet padding={50} magnetStrength={50}>
              <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">SKILLS & EXPERIENCE</p>
            </Magnet>
          </div>
          <div className="relative w-full overflow-clip">
            <Timeline data={data} />
            <div className="flex items-center gap-6 pl-4 md:pl-16 flex-wrap">
  <ShinyText text="Tech Stack : " disabled={false} speed={3} className="custom-class text-3xl sm:text-4xl md:text-4xl font-bold whitespace-nowrap tracking-widest" />
  <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" aria-label="React">
    <Image src="/react.svg" alt="React" className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Node.js">
    <Image src="/nodejs.svg" alt="Node.js" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="TypeScript">
    <Image src="/ts.svg" alt="TypeScript" className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" aria-label="Tailwind CSS">
    <Image src="/css.svg" alt="Tailwind CSS" className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" aria-label="Solidity">
    <Image src="/sol.svg" alt="Solidity" className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer" aria-label="Python">
    <Image src="/py.svg" alt="Python" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://en.wikipedia.org/wiki/Terminal_emulator" target="_blank" rel="noopener noreferrer" aria-label="Terminal">
    <Image src="/terminal.svg" alt="Terminal" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" aria-label="JavaScript">
    <Image src="/js.svg" alt="JavaScript" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://en.wikipedia.org/wiki/Database" target="_blank" rel="noopener noreferrer" aria-label="Database">
    <Image src="/database.svg" alt="Database" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" aria-label="Figma">
    <Image src="/figma.svg" alt="Figma" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
  <Link href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" aria-label="C++">
    <Image src="/c.svg" alt="C++" className="w-9 h-9 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-none" width={100} height={100} />
  </Link>
</div>
          </div>
        </section>
        <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
        <section id="projects" className="about min-h-screen py-10 px-2 sm:px-4 md:px-8 flex flex-col">
          <div className="w-full flex justify-center items-center mb-12 mt-8 relative">
            <div className="absolute left-0 flex flex-col items-start" style={{ top: '0.3rem', left: '2rem' }}>
              <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-center text-white sm:mt-4 sm:left-0 sm:top-0 sm:relative" style={{ marginTop: '0.2rem' }}>04</span>
            </div>
            <Magnet padding={50} magnetStrength={50}>
              <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">PROJECTS</p>
            </Magnet>
          </div>
          <div className="w-full flex items-center justify-center my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 justify-center items-center" style={{ maxWidth: 1000 }}>
              <div className="flex justify-center">
                <Link href="https://fitmonk-xi.vercel.app/" className="cursor-none" onMouseEnter={() => setCursorBlack(true)} onMouseLeave={() => setCursorBlack(false)} aria-label="Open Project 1">
                  <TiltedCard imageSrc="/fitmonk-1.png" altText="Fitmonk-Web" captionText="Fitmonk-Web" containerHeight="270px" containerWidth="270px" imageHeight="250px" imageWidth="250px" rotateAmplitude={12} scaleOnHover={1.2} showMobileWarning={false} showTooltip={true} displayOverlayContent={true} />
                </Link>
              </div>

              <div className="flex justify-center">
                <Link href="/projects/project-2" className="cursor-none" onMouseEnter={() => setCursorBlack(true)} onMouseLeave={() => setCursorBlack(false)} aria-label="Open Project 2">
                  <TiltedCard imageSrc="/betty.png" altText="Betty-The Betting DApp" captionText="Betty-The Betting Bot " containerHeight="270px" containerWidth="270px" imageHeight="250px" imageWidth="250px" rotateAmplitude={12} scaleOnHover={1.2} showMobileWarning={false} showTooltip={true} displayOverlayContent={true} />
                </Link>
              </div>

              <div className="flex justify-center items-center">
                <Link href="/projects/project-3" className="cursor-none" onMouseEnter={() => setCursorBlack(true)} onMouseLeave={() => setCursorBlack(false)} aria-label="Open Project 3">
                  <TiltedCard imageSrc="/block.png" altText="Project 3" captionText="Blocktix-The Event Check-in dApp" containerHeight="270px" containerWidth="270px" imageHeight="250px" imageWidth="250px" rotateAmplitude={12} scaleOnHover={1.2} showMobileWarning={false} showTooltip={true} displayOverlayContent={true} />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href="https://lilacsolace-store.vercel.app/" className="cursor-none" onMouseEnter={() => setCursorBlack(true)} onMouseLeave={() => setCursorBlack(false)} aria-label="Open Project 3">
                  <TiltedCard imageSrc="/lilacstore.png" altText="Project 3" captionText="Lilacsolace - The only booth you need for making picturized memories" containerHeight="270px" containerWidth="270px" imageHeight="250px" imageWidth="250px" rotateAmplitude={12} scaleOnHover={1.2} showMobileWarning={false} showTooltip={true} displayOverlayContent={true} />
                </Link>
              </div>
             </div>
           </div>
           <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
           <div className="mb-16" />
           <Magnet padding={50} magnetStrength={50}>
              <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">CAPABILITIES</p>
            </Magnet>
          <div className="mb-8"/>
          
          <div className="w-full sm:w-11/12 md:w-5/6 mx-auto border border-white rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] px-4 py-10 my-8 flex flex-col items-center justify-center min-h-[660px] relative overflow-hidden shadow-2xl shadow-white/10" style={{ minHeight: '660px', borderWidth: 2, borderColor: 'rgba(255,255,255,0.7)', boxShadow: '0 8px 48px 0 rgba(255,255,255,0.08)' }}>
            <div className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
              <div className="absolute w-full flex items-center justify-center top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)', zIndex: 10, pointerEvents: 'auto' }}>
                <span className="flex flex-col items-center text-lg md:text-2xl font-bold text-white text-center  px-6 py-2 rounded-xl shadow-lg tracking-widest">
                  <span>PROJECT TYPES I</span>
                  <span className="mt-1">SPECIALIZE IN</span>
                </span>
              </div>
              {(() => {
                const serviceNames = ["Web Development","UI/UX Design","Auth Systems","Landing Page","Blockchain dApps","API Integrations","Content Strategy","AI Automation","ECommerce Sites","System Design"];
                const positions = [{ top: '18%', left: '8%' },{ top: '32%', left: '22%' },{ top: '60%', left: '12%' },{ top: '18%', left: '40%' },{ top: '55%', left: '33%' },{ top: '30%', left: '70%' },{ top: '22%', left: '88%' },{ top: '65%', left: '70%' },{ top: '80%', left: '22%' },{ top: '75%', left: '88%' }];
                return positions.map((pos, i) => (
                  <div key={i} className="absolute bg-white bg-opacity-10 border border-white rounded-full flex items-center justify-center text-white text-base font-semibold shadow-lg backdrop-blur-md transition-all  duration-500 hover:bg-opacity-30 hover:scale-105 cursor-none text-center px-4 tracking-widest" style={{ width: 140, height: 140, minWidth: 140, minHeight: 140, pointerEvents: 'auto', top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 12px' }}>{serviceNames[i]}</div>
                ));
              })()}
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 sm:hidden">
              <div className="flex flex-col items-center mb-0">
                <span className="flex flex-col items-center text-base font-bold text-white text-center px-4 py-2 rounded-xl shadow-lg tracking-widest"><span>PROJECT TYPES I</span><span className="mt-1">SPECIALIZE IN</span></span>
              </div>
              <div className="grid grid-cols-2 gap-3 w-full px-2">
                {["Web Development","UI/UX Design","Auth Systems","Landing Page","Blockchain DApps","API Integrations","Content Strategy","AI Automation","ECommerce Sites","System Design"].map((service, i) => (
                  <div key={i} className="bg-white bg-opacity-10 border border-white rounded-2xl flex items-center justify-center text-white text-xs font-semibold shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-opacity-30 hover:scale-105 cursor-none text-center px-2 py-4 tracking-widest min-h-[60px]">{service}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-24" />
          <CurvedLoop marqueeText="Vector  X ✦" />
          <div className="mb-10" />
          <div className="pb-8" />
          <div className="w-full flex flex-col items-center justify-center py-10">
            <ShinyText text="Drop Your Reviews" disabled={false} speed={3} className='custom-class text-4xl font-bold justify-center' />
            <div className="mb-8" />
            <PlaceholdersAndVanishInput placeholders={["Drop your thoughts here...", "Say something cool!", "What's on your mind?"]} />
          </div>
        </section>
        <motion.nav style={{ opacity }} className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-xl md:max-w-6xl px-4 sm:px-6 py-4 z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-xl shadow-lg transition-all duration-500">
  <div className="relative w-full mx-auto flex items-center justify-center px-2 sm:px-4">
        <Link href="/" className="absolute left-0 text-3xl font-bold tracking-tight text-white cursor-none" style={{ cursor: "none" }}>ard.</Link>
        <div className="absolute right-0 flex items-center md:hidden">
          <button className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none" onClick={() => setShowNav(!showNav)} aria-label="Open navigation menu" type="button">
            <span className="block w-7 h-0.5 bg-white mb-1 rounded transition-all" />
            <span className="block w-7 h-0.5 bg-white mb-1 rounded transition-all" />
            <span className="block w-7 h-0.5 bg-white rounded transition-all" />
          </button>
        </div>

        <div className="hidden md:flex gap-8 justify-center items-center">
          {["projects", "about"].map((section) => (
            <Link key={section} href={`#${section}`} className="relative px-4 py-1 text-s cursor-none group rounded-full overflow-hidden" style={{ cursor: "none" }}>
              <span className="absolute left-0 bottom-0 w-full h-full bg-white border border-white rounded-full z-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-full group-hover:translate-y-0" aria-hidden="true" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black tracking-widest lowercase">{section === "projects" ? "काम" : "helo_"}</span>
            </Link>
          ))}
        </div>

        <div className="absolute right-0 items-center hidden md:flex">
          <Link href="/contact" className="relative overflow-hidden px-4 py-2 rounded-full border border-gray-400 text-xs font-semibold cursor-none group " style={{ cursor: "none" }} onMouseEnter={() => setCursorBlack(true)} onMouseLeave={() => setCursorBlack(false)}>
            <span className="absolute left-0 bottom-0 w-full h-full bg-white z-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-full group-hover:translate-y-0" aria-hidden="true" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">AVAILABLE FOR FREELANCE</span>
          </Link>
        </div>

        {showNav && (
          <div ref={navMenuRef} className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-sm bg-black/50 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center gap-4 py-6 px-6 md:hidden z-50 border border-gray-700">
            {["projects", "about"].map((section) => (
              <Link key={section} href={`#${section}`} className="relative px-4 py-2 text-base cursor-none group rounded-full overflow-hidden w-full text-center" style={{ cursor: "none" }} onClick={() => setShowNav(false)}>
                <span className="absolute left-0 bottom-0 w-full h-full bg-white border border-white rounded-full z-0 transition-transform duration-500 group-hover:translate-y-0 translate-y-full" />
                <span className="relative z-10 group-hover:text-black tracking-widest lowercase">{section === "projects" ? "काम" : "helo_"}</span>
              </Link>
            ))}
            <Link href="/contact" className="relative overflow-hidden px-4 py-2 rounded-full border border-gray-400 text-xs font-semibold cursor-none group w-full text-center" style={{ cursor: "none" }} onMouseEnter={() => setCursorBlack(true)} onMouseLeave={() => setCursorBlack(false)} onClick={() => setShowNav(false)}>
              <span className="absolute left-0 bottom-0 w-full h-full bg-white z-0 transition-transform duration-500 group-hover:translate-y-0 translate-y-full" />
              <span className="relative z-10 group-hover:text-black">AVAILABLE FOR FREELANCE</span>
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
        <footer className="w-full mt-12 py-6 text-white flex flex-col items-center justify-center text-xs opacity-80 rounded-b-3xl">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <span className="mb-1">&copy; {new Date().getFullYear()} Ashish Ranjan Das. All rights reserved.</span>
            <span className="text-[0.7rem]">Made with <span className="text-green-400">Next.js</span> & <span className="text-green-400">Tailwind CSS</span></span>
            <div className="flex flex-row gap-6 mt-4 justify-center">
              <Link href="https://github.com/0day-Ashish" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/ashish-ranjan-das%E2%86%97-530512198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                  <path strokeWidth="2" d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.105.895-2 2-2s2 .895 2 2v7"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/ashishh_rd_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-pink-400">
                  <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </Link>
              <Link href="https://x.com/Ashishrd06" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0012.07 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C5.09 9.37 3.13 8.29 1.671 6.684c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.103-.775.158-1.186.158-.29 0-.57-.028-.844-.08.57 1.78 2.223 3.078 4.183 3.113A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.253 0 12.77-6.835 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.6.713z" />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    );
  }