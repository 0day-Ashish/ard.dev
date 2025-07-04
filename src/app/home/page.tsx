"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from '../components/bg';
import BlurText from "../components/BlurText";
import Magnet from '../components/Magnet';
import DecayCard from '../components/DecayCard';
import DecryptedText from '../components/DecryptedText';
import ScrambledText from '../components/ScrambledText';
import { ExpandableCardDemo } from '../components/SkillsShow';
import { Timeline } from '../components/Skills';





export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorBlack, setCursorBlack] = useState(false);
  const [cursorExpand, setCursorExpand] = useState(true);
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/sponsor.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/monad.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/canop.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/monad2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/semicolon.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/algorand.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "End 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <main className="min-h-screen w-full bg-black text-white relative overflow-x-hidden cursor-none" style={{ cursor: 'none' }}>
      {/* Particles background */}
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div
        style={{
          position: 'fixed',
          left: cursor.x - 10,
          top: cursor.y - 10,
          width: 20,
          height: 20,
          zIndex: 9999,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <line x1="10" y1="9" x2="10" y2="5" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateY(-4px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
          <line x1="10" y1="11" x2="10" y2="15" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateY(4px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
          <line x1="9" y1="10" x2="5" y2="10" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateX(-4px)' : 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
          <line x1="11" y1="10" x2="15" y2="10" stroke={cursorBlack ? 'black' : 'white'} strokeWidth="2" style={{ transform: cursorExpand ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center px-4 py-10 relative mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="space-y-2 leading-[0.9] flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase text-center">MULTI–</h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase text-center">DISCIPLINARY</h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase text-center">DEVELOPER</h1>
          </div>
          <div className="text-xs md:text-xs text-white-300 max-w-sm absolute right-36 md:right-60 mt-32 md:mt-52" style={{marginRight: 0}}>
            <p className='text-right'>CREATIVE THINKING AND PROBLEM</p>
            <p>SOLVING ARE WHERE MY MIND WANDERS,</p>
            <p>USING MY KNOWLEDGE AND PASSION FOR</p>
            <p>DESIGN AS MY MEDIUM.</p>
          </div>
          <div className="flex justify-center mt-16">
            <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
              <span className="text-2xl">↓</span>
            </div>
          </div>
        </motion.div>
        <div className="absolute left-0 flex flex-col items-start" style={{ top: '11.5rem', left: '5rem' }}>
          <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-center text-white">
            01//04 - SCROLL<svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </section>
      
      {/* About Section */}
      <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
      <section id="about" className="about min-h-screen py-10 px-4 md:px-8 flex flex-col">
        <div className="w-full flex justify-center items-center mb-12 mt-8 relative">
          {/* Section number at the left */}
          <div className="absolute left-0 flex flex-col items-start" style={{ top: '0', left: '6rem' }}>
            <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-center text-white">
              02
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
          <Magnet padding={50} magnetStrength={50}>
            <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">ABOUT</p>
          </Magnet>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 w-full flex-1">
          <div className="w-full md:w-1/2 flex justify-start pl-8 md:pl-16 text-2xl" style={{ marginTop: '4rem' }}>
            
<ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars="{}:."
>
     19 y/o Full-stack Dev passionate about design, AI/ML and Web3 — turning ideas into      interactive,intelligent and decentralized <span style={{ display: 'block' }}>experiences.</span>
</ScrambledText>

          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center pr-8 md:pr-16">
            <DecayCard width={400} height={500} image="/me.png"/>
          </div>
        </div>
      </section>
      <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
      {/* Skills Section */}
      <section id="skills" className="skills min-h-screen py-10 px-4 md:px-8 flex flex-col">
        <div className="w-full flex justify-center items-center mb-12 mt-8 relative">
          {/* Section number at the left */}
          <div className="absolute left-0 flex flex-col items-start" style={{ top: '0', left: '6rem' }}>
            <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-center text-white">
              03
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M5 10L9 14L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
          <Magnet padding={50} magnetStrength={50}>
            <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">SKILLS & EXPERIENCE</p>
          </Magnet>
        </div>
        {/* Add your skills content here */}
         <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
      </section>
      <div className="w-11/12 md:w-5/6 h-[1px] bg-white my-0 mx-auto rounded-full" />
      {/* Projects Section */}
      <section id="projects" className="about min-h-screen py-10 px-4 md:px-8 flex flex-col">
        {/* Section title */}
        <div className="w-full flex justify-center items-center mb-12 mt-8 relative">
          {/* Section number at the left */}
          <div className="absolute left-0 flex flex-col items-start" style={{ top: '0', left: '6rem' }}>
            <span className="mt-4 text-[0.7rem] md:text-xs tracking-widest flex items-center text-white">
              04
            </span>
          </div>
          <Magnet padding={50} magnetStrength={50}>
            <p className="text-2xl md:text-2xl font-bold text-white tracking-widest text-center ">PROJECTS</p>
          </Magnet>
        </div>
        <ExpandableCardDemo/>

      </section>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-5 left-0 w-full p-6 z-50"
      >
        <div className="relative max-w-7xl mx-auto flex items-center justify-center">
          <a
            href="/"
            className="absolute left-0 text-5xl md:text-1xl font-bold text-left cursor-none"
            style={{cursor: 'none'}}
          >
            ard.
          </a>
          <div className="flex gap-8 justify-center items-center">
            <a
              href="#projects"
              className="relative px-4 py-1 text-s cursor-none group rounded-full overflow-hidden"
              style={{ cursor: 'none', display: 'inline-block' }}
            >
              <span
                className="absolute left-0 bottom-0 w-full h-full bg-white border-2 border-white-400 rounded-full z-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-full"
                style={{ borderRadius: '9999px' }}
                aria-hidden="true"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">काम</span>
            </a>
            
            <a
              href="#about"
              className="relative px-4 py-1 text-s cursor-none group rounded-full overflow-hidden"
              style={{ cursor: 'none', display: 'inline-block' }}
            >
              
              <span
                className="absolute left-0 bottom-0 w-full h-full bg-white border-2 border-white-400 rounded-full z-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-full"
                style={{ borderRadius: '9999px' }}
                aria-hidden="true"
              />
             
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">helo_</span>
            </a>
          </div>
          <div className="absolute right-0 flex items-center">
            <a
              href='/contact'
              className="relative overflow-hidden px-4 py-2 rounded-full border border-gray-400 text-xs font-semibold cursor-none group"
              style={{borderRadius: '9999px', cursor: 'none'}}
              onMouseEnter={() => setCursorBlack(true)}
              onMouseLeave={() => setCursorBlack(false)}
            >
              
              <span
                className="absolute left-0 bottom-0 w-full h-full bg-white z-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-full"
                style={{ borderRadius: '9999px' }}
                aria-hidden="true"
              />
              
              <span className="relative z-10 transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:text-black" style={{ display: 'inline-block' }}>
                AVAILABLE FOR FREELANCE
              </span>
            </a>
          </div>
        </div>
      </motion.nav>
      <footer className="w-full mt-12 py-6 text-white flex flex-col items-center justify-center text-xs opacity-80 rounded-b-3xl">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <span className="mb-1">&copy; {new Date().getFullYear()} Ashish Ranjan Das. All rights reserved.</span>
          <span className="text-[0.7rem]">Made with <span className="text-green-400">Next.js</span> & <span className="text-green-400">Tailwind CSS</span></span>
        </div>
      </footer>
    </main>
  );
}