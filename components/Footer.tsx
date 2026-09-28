'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { type FormEvent, useRef, useState } from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaPaperPlane,
  FaCheck,
} from 'react-icons/fa6';
import { RainbowButton } from '@/components/ui/rainbow-button';



const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const variants = {
    visible: (i: number) => ({
      translateY: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 90,
        damping: 14,
        duration: 0.5,
        delay: i * 0.05,
      },
    }),
    hidden: { translateY: 80, opacity: 0 },
  };

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setOpenPopUp(true);
    setEmail('');
    setTimeout(() => {
      setOpenPopUp(false);
    }, 3500);
  };

  const sitemapLinks = [
    { name: 'About', href: '#about' },
    { name: 'Curriculum Vitae', href: 'https://drive.google.com/file/d/1147u22rJFldBUflJQmCew4Jr38fqj-xc/view' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Experience', href: '#experience' },
    { name: 'Approach', href: '#approach' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
    { name: 'Twitter / X', icon: FaXTwitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  ];

  return (
    <>
      {/* Toast Feedback */}
      {openPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className='fixed bottom-6 right-6 z-[6000] flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#04071D]/90 border border-[#13D6E9]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(19,214,233,0.25)] text-foreground font-mono text-xs sm:text-sm'
        >
          <span className='w-6 h-6 rounded-full bg-[#13D6E9]/20 text-[#13D6E9] flex items-center justify-center shrink-0 border border-[#13D6E9]/50'>
            <FaCheck className='w-3 h-3' />
          </span>
          <span className='text-gray-200'>Message received! Thanks for connecting.</span>
          <button
            type='button'
            onClick={() => setOpenPopUp(false)}
            className='ml-2 text-xs text-[#13D6E9] hover:underline font-bold'
          >
            DISMISS
          </button>
        </motion.div>
      )}

      {/* Main Footer Container with NO solid background */}
      <footer
        className='relative w-full pt-16 sm:pt-24 pb-10 font-mono text-foreground bg-transparent overflow-hidden'
        ref={container}
        id='contact'
      >
        {/* Subtle top glow line */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-[#13D6E9]/30 to-transparent mb-12' />

        {/* Ambient radial accent glow */}
        <div
          className='pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 w-[600px] h-[300px] -z-10 opacity-30 blur-[90px]'
          style={{
            background: 'radial-gradient(circle, rgba(19, 214, 233, 0.4) 0%, rgba(7, 88, 104, 0.15) 50%, transparent 80%)',
          }}
        />

        <div className='w-full px-2 sm:px-4'>
          {/* Top Section: Newsletter + Links */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start justify-between'>
            {/* Left Column: Heading + Newsletter Form */}
            <div className='lg:col-span-6 flex flex-col'>
              <span className='text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3'>
                Get In Touch
              </span>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight'>
                Let&apos;s build something <span className='text-[#13D6E9]'>exceptional</span> together.
              </h2>
              <p className='mt-3 text-muted-foreground text-xs sm:text-sm md:text-base max-w-md leading-relaxed'>
                Open for opportunities, consulting, and forward-thinking tech projects.
              </p>

              {/* CV Button */}
              <div className='mt-5'>
                <RainbowButton
                  asChild
                  className='rounded-full px-7 py-3 text-xs sm:text-sm font-bold tracking-wider shadow-lg shadow-cyan-500/10 active:scale-95 transition-transform'
                >
                  <a
                    href="https://drive.google.com/file/d/1147u22rJFldBUflJQmCew4Jr38fqj-xc/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW CV &gt;
                  </a>
                </RainbowButton>
              </div>

              {/* Newsletter subscription form */}
              <div className='mt-8 max-w-md'>
                <p className='text-xs sm:text-sm text-gray-300 font-semibold mb-3 tracking-wider uppercase'>
                  Subscribe for updates & tech notes
                </p>
                <form
                  onSubmit={handleNewsLetterData}
                  className='relative flex items-center rounded-full bg-black/40 border border-white/10 backdrop-blur-xl p-1.5 focus-within:border-[#13D6E9]/60 focus-within:shadow-[0_0_24px_rgba(19,214,233,0.25)] transition-all duration-300'
                >
                  <input
                    type='email'
                    name='newsletter_email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='your.email@example.com'
                    className='bg-transparent text-white placeholder:text-gray-500 text-xs sm:text-sm px-4 py-2 flex-grow focus:outline-none'
                  />
                  <button
                    type='submit'
                    className='group inline-flex items-center gap-2 bg-[#13D6E9] hover:bg-[#13D6E9]/90 text-black font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300 shrink-0 shadow-[0_0_14px_rgba(19,214,233,0.4)] active:scale-95'
                  >
                    <span>Subscribe</span>
                    <FaPaperPlane className='w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Sitemap & Social Links */}
            <div className='lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 lg:justify-items-end'>
              {/* Sitemap */}
              <div className='flex flex-col space-y-3'>
                <span className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#13D6E9] mb-1'>
                  Sitemap
                </span>
                <ul className='space-y-2 text-xs sm:text-sm'>
                  {sitemapLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className='text-muted-foreground hover:text-[#13D6E9] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className='flex flex-col space-y-3'>
                <span className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#13D6E9] mb-1'>
                  Connect
                </span>
                <ul className='space-y-2 text-xs sm:text-sm'>
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='group flex items-center gap-2 text-muted-foreground hover:text-[#13D6E9] transition-colors duration-200 hover:translate-x-1 transition-transform'
                      >
                        <social.icon className='w-3.5 h-3.5 text-[#13D6E9]/70 group-hover:text-[#13D6E9]' />
                        <span>{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Animated Signature: "moments to motion" */}
          <div className='mt-14 sm:mt-20 py-8 sm:py-12 border-y border-white/10 overflow-hidden relative flex items-center justify-center select-none'>
            <div
              ref={ref}
              className='w-full flex items-center justify-center overflow-hidden'
            >
              <motion.div
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                className='font-black tracking-tighter text-center uppercase whitespace-nowrap text-[#13D6E9] text-[clamp(1.75rem,5.5vw,5.5rem)] leading-none select-none drop-shadow-[0_0_25px_rgba(19,214,233,0.45)]'
              >
                {"moments into motion".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={variants}
                    className='inline-block'
                    style={{
                      textShadow:
                        '0 0 20px rgba(19, 214, 233, 0.55), 0 0 45px rgba(19, 214, 233, 0.25)',
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className='mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-muted-foreground'>
            <span>
              &copy; {new Date().getFullYear()} Hriday Debnath. All rights reserved.
            </span>
            <div className='flex items-center gap-6'>
              <a href='#about' className='hover:text-[#13D6E9] transition-colors'>
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

