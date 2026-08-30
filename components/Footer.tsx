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

const pathArr = [
  'M55.7447 0H15.3191L0 45.5836H18.2979L4.25532 81.7065H16.5957L5.95745 126L34.4681 82.9966L45.9574 126H120V0H104.681L104.255 110.519H58.2979L45.9574 64.5051H28.0851L42.9787 39.1331L61.7021 106.648H99.5745V0H80V94.6075H76.1702L55.7447 0Z',
  'M167.002 107.746C175.137 107.746 182.109 104.758 186.426 97.4531H207.178C200.371 114.719 186.592 125.676 167.666 125.676C143.594 125.676 124.834 106.916 124.834 82.8438C124.834 59.6016 143.262 39.5137 166.836 39.5137C192.402 39.5137 210 59.9336 210 84.6699C210 85.998 209.834 87.3262 209.834 88.6543H144.424C145.752 101.271 154.717 107.746 167.002 107.746ZM166.836 57.1113C156.543 57.1113 147.744 63.4199 145.088 73.5469H189.414C186.094 62.4238 178.291 57.1113 166.836 57.1113Z',
  'M244.512 60.2656L261.5 41L294 0V32L255.137 78.6934L291.494 125.344C291.494 125.51 291.66 125.51 291.66 125.676L291.826 125.842H266.758C266.758 125.842 266.758 125.842 266.592 125.676L244.346 97.1211H240.693L205 136.998H186.5L230.068 78.6934L199.5 40H225L225.254 40.3438L240.693 60.2656H244.512Z',
  'M337.978 126H296.142V0H315.898V39.0137H343L339 54.4531H315.898V109.072H337.978V126Z',
  'M455.019 39.3457H426.299C419.492 29.8828 409.697 25.4004 398.076 25.4004C377.49 25.4004 361.885 42.998 361.885 63.252C361.885 83.6719 376.826 101.934 398.076 101.934C409.033 101.934 419.16 98.2812 425.469 89.1504H454.189C443.232 113.057 424.805 125.84 398.408 125.84C363.047 125.84 337.48 97.2852 337.48 62.7539C337.48 29.2188 365.039 1.32812 398.574 1.32812C425.469 1.32812 443.896 15.1074 455.019 39.3457Z',
  'M495.693 39.6777C519.433 39.6777 539.023 58.1055 539.023 82.0117C539.023 106.748 521.094 125.84 496.025 125.84C472.119 125.84 453.359 106.25 453.359 82.5098C453.359 58.9355 472.285 39.6777 495.693 39.6777ZM496.191 106.914C511.133 106.914 519.267 96.123 519.267 81.8457C519.267 68.2324 509.805 58.4375 496.191 58.4375C482.246 58.4375 472.949 68.7305 472.949 82.5098C472.949 96.7871 481.25 106.914 496.191 106.914Z',
  'M539.023 82.5098C539.023 58.9355 557.617 39.6777 581.357 39.6777C590.488 39.6777 599.453 42.168 606.592 48.3105V0H625.185V125.84H606.592V116.543C599.287 122.354 590.488 125.674 581.357 125.674C557.119 125.674 539.023 106.25 539.023 82.5098ZM582.685 58.6035C569.238 58.6035 558.945 69.5605 558.945 82.8418C558.945 96.9531 569.736 106.748 583.515 106.748C596.963 106.748 605.762 95.791 605.762 83.0078C605.762 69.5605 596.465 58.6035 582.685 58.6035Z',
  'M666.76 108.138C674.817 108.138 681.722 105.162 685.997 97.8846H706.548C699.807 115.085 686.161 126 667.418 126C643.578 126 625 107.312 625 83.3308C625 60.177 643.249 40.1654 666.596 40.1654C691.915 40.1654 709.343 60.5077 709.343 85.15C709.343 86.4731 709.179 87.7962 709.179 89.1192H644.4C645.716 101.688 654.594 108.138 666.76 108.138ZM666.596 57.6962C656.402 57.6962 647.689 63.9808 645.058 74.0693H688.956C685.668 62.9885 677.94 57.6962 666.596 57.6962Z',
  'M775.138 110.619V126H700.166V114.092L747.517 55.3808H702.633V40H772.508V51.9077L724.17 110.619H775.138Z',
];

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

          {/* Animated Signature SVG (Rendered in cyan neon theme) */}
          <div className='mt-14 sm:mt-20 pt-8 pb-4 border-y border-white/10 overflow-hidden relative'>
            <motion.svg
              width='776'
              ref={ref}
              height='137'
              viewBox='0 0 776 137'
              fill='none'
              className='w-full h-16 sm:h-24 md:h-32 px-2 sm:px-6'
              xmlns='http://www.w3.org/2000/svg'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
            >
              {pathArr.map((path, index) => (
                <motion.path
                  key={index}
                  custom={index}
                  variants={variants}
                  d={path}
                  fill='#13D6E9'
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(19, 214, 233, 0.35))',
                  }}
                />
              ))}
            </motion.svg>
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

