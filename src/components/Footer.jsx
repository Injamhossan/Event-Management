
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fcfbfb] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold text-secondary">EventHub</span>
            </Link>
            <p className="text-secondary/60 leading-relaxed text-sm group-hover:text-secondary transition-colors">
              Discover and create amazing events. Connect with people who share your passions.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-secondary/60 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-secondary text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Browse Events', 'Create Event', 'About Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Categories */}
          <div>
            <h3 className="font-serif font-bold text-secondary text-lg mb-6">Categories</h3>
             <ul className="space-y-4">
              {['Music', 'Technology', 'Business', 'Sports', 'Art'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-serif font-bold text-secondary text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shrink-0 mt-[-4px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-secondary/60 text-sm">hello@eventhub.com</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shrink-0 mt-[-4px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                 <span className="text-secondary/60 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shrink-0 mt-[-4px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-secondary/60 text-sm">
                  123 Event Street,<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary/40 text-xs">
            © 2026 EventHub. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-secondary/40 hover:text-secondary hover:underline transition-all text-xs">
              Privacy Policy
            </Link>
             <Link href="#" className="text-secondary/40 hover:text-secondary hover:underline transition-all text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
