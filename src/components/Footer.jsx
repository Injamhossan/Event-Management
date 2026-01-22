
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Calendar, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <Facebook className="w-4 h-4" />
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-4 h-4" />
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-4 h-4" />
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-4 h-4" />
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#fcfbfb] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold text-secondary">EventHub</span>
            </Link>
            <p className="text-secondary/60 leading-relaxed text-sm group-hover:text-secondary transition-colors">
              Discover and create amazing events. Connect with people who share your passions.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              {socialLinks.map((social) => (
                <a key={social.name} href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-secondary/60 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
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
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-secondary/60 text-sm">hello@eventhub.com</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shrink-0 mt-[-4px]">
                  <Phone className="w-4 h-4" />
                </div>
                 <span className="text-secondary/60 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shrink-0 mt-[-4px]">
                  <MapPin className="w-4 h-4" />
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
