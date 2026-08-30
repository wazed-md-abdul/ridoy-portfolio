import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-mono px-4 text-center'>
      <h2 className='text-4xl sm:text-5xl font-extrabold mb-4 text-white'>
        404 - Page Not <span className='text-[#13D6E9]'>Found</span>
      </h2>
      <p className='text-muted-foreground mb-8 max-w-md'>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href='/'
        className='px-6 py-3 rounded-full bg-[#13D6E9] text-black font-bold text-sm hover:bg-[#13D6E9]/90 transition-colors shadow-[0_0_16px_rgba(19,214,233,0.4)]'
      >
        Return Home
      </Link>
    </div>
  );
}
