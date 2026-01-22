
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-[#3e3431] px-6 py-20 md:px-12 md:py-24 overflow-hidden text-center">
          
          {/* Background Pattern/Gradient */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Heart Icon */}
            <div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Create Your Event?
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl">
              Join over 10,000 organizers who have created successful events with EventHub. Start for free today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="/signup" className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                Get Started Free
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-secondary font-semibold rounded-full hover:bg-gray-50 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
