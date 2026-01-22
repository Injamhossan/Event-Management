import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fdfaf9]">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-100 text-primary text-xs font-semibold mb-8">
           <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Discover Amazing Events
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-secondary mb-8 leading-[1.1]">
          <span className="font-serif">Create</span>{' '}
          <span className="text-primary">Memorable</span>
          <br />
          <span className="font-serif">Experiences</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-secondary/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          From intimate gatherings to grand celebrations, find the perfect event or create your own unforgettable moments.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/events" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full hover:opacity-90 transition-all shadow-xl shadow-primary/25 active:scale-95 flex items-center justify-center gap-2">
            Explore Events
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link href="/create" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-secondary font-semibold rounded-full hover:bg-gray-50 transition-all active:scale-95 shadow-sm hover:shadow-md">
            Create Event
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-secondary/60">
          <div className="flex items-center gap-2">
            <CheckIcon />
            Free to start
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            No credit card
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  )
}
