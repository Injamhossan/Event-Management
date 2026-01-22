import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">EventHub</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/events" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Events
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link href="/signin" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Sign In
          </Link>
          <button className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
