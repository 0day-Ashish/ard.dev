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
import ShinyText from '../components/ShinyText';

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
            Built & Explored Events, Hackathons, Projects on blockchain globally and brought in sponsors like Harley , BMW etc., This year gave me a lot to learn and grow.
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
              src="firstcontract.png"
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
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            First Year of college. 
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I've been working freelance since two years and here are some of the projects I worked on.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="canop.png"
              alt="eventabc"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="bet0verse.png"
              alt="monad_project"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="blocktix.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="fitmonk.png"
              alt="coredao"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Peak Era ",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            4 coding tips i'd kill to tell my 17 y/o self :  
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Coding is very hard at first 
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Interviews are harder than job
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Do EVERYTHING to land an internship
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Build endless shits ! 
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="port.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="random.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="image.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="random2.png"
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
            <div className="flex flex-col gap-4">
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars="{}:."
              >
                19 y/o Full-stack Dev passionate about design, AI/ML and Web3 — turning ideas into interactive,intelligent and decentralized <span style={{ display: 'block' }}>experiences.</span>
              </ScrambledText>
              {/* Social Links */}
            <div className="flex flex-row gap-6 mt-6">
              <div className="flex flex-row gap-6 mt-6" style={{ marginLeft: '4.5rem' }}/>
              <a href="https://github.com/0day-Ashish" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                {/* GitHub SVG */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ashish-ranjan-das%E2%86%97-530512198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                {/* LinkedIn SVG */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                  <path strokeWidth="2" d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.105.895-2 2-2s2 .895 2 2v7"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ashishh_rd_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                {/* Instagram SVG */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-pink-400">
                  <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://x.com/Ashishrd06" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                {/* Twitter SVG */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0012.07 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C5.09 9.37 3.13 8.29 1.671 6.684c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.103-.775.158-1.186.158-.29 0-.57-.028-.844-.08.57 1.78 2.223 3.078 4.183 3.113A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.253 0 12.77-6.835 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.6.713z" />
                </svg>
              </a>
            </div>
            </div>
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
         <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <div className="flex items-center gap-4 pl-16 md:pl-32">
        <ShinyText text="Tech Stack : " disabled={false} speed={3} className='custom-class text-4xl font-bold' />
        <div className="flex flex-row gap-6 ml-2">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" aria-label="React">
            <img src="/react.svg" alt="React" className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Node.js">
            <img src="/nodejs.svg" alt="Node.js" className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="TypeScript">
            <img src="/ts.svg" alt="TypeScript" className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" aria-label="Tailwind CSS">
            <img src="/css.svg" alt="Tailwind CSS" className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" aria-label="Solidity">
            <img src="/sol.svg" alt="Solidity" className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" aria-label="Python">
            <img src="/py.svg" alt="Python" className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://en.wikipedia.org/wiki/Terminal_emulator" target="_blank" rel="noopener noreferrer" aria-label="Terminal">
            <img src="/terminal.svg" alt="Terminal" className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" aria-label="JavaScript">
            <img src="/js.svg" alt="JavaScript" className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
          <a href="https://en.wikipedia.org/wiki/Database" target="_blank" rel="noopener noreferrer" aria-label="Database">
            <img src="/database.svg" alt="Database" className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </a>
        </div>
      </div>
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
          <div className="flex flex-row gap-6 mt-4 justify-center">
            <a href="https://github.com/0day-Ashish" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ashish-ranjan-das%E2%86%97-530512198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-400">
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                <path strokeWidth="2" d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.105.895-2 2-2s2 .895 2 2v7"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ashishh_rd_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-pink-400">
                <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://x.com/Ashishrd06" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-blue-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0012.07 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C5.09 9.37 3.13 8.29 1.671 6.684c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.103-.775.158-1.186.158-.29 0-.57-.028-.844-.08.57 1.78 2.223 3.078 4.183 3.113A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.253 0 12.77-6.835 12.77-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.6.713z" />
                </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}