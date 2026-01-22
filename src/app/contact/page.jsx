
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf9]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <div>
                   <span className="text-primary font-bold tracking-wider uppercase text-sm">Get in touch</span>
                   <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mt-3 mb-6">
                       Let's Chat About Your Next Event
                   </h1>
                   <p className="text-secondary/60 text-lg mb-10 leading-relaxed">
                       Have questions regarding our services? Want to organize a large scale event or need custom support? We are here to help you.
                   </p>

                   <div className="space-y-8">
                       <div className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary shrink-0">
                               <Mail className="w-5 h-5" />
                           </div>
                           <div>
                               <h3 className="font-bold text-secondary text-lg">Email Us</h3>
                               <p className="text-secondary/60">Our friendly team is here to help.</p>
                               <a href="mailto:hello@eventhub.com" className="text-primary font-medium mt-1 block">hello@eventhub.com</a>
                           </div>
                       </div>
                       
                       <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary shrink-0">
                               <MapPin className="w-5 h-5" />
                           </div>
                           <div>
                               <h3 className="font-bold text-secondary text-lg">Visit Us</h3>
                               <p className="text-secondary/60">Come say hello at our office HQ.</p>
                               <p className="text-secondary font-medium mt-1">100 Smith Street, Collingwood VIC 3066 AU</p>
                           </div>
                       </div>

                       <div className="flex items-start gap-4">
                             <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary shrink-0">
                               <Phone className="w-5 h-5" />
                           </div>
                           <div>
                               <h3 className="font-bold text-secondary text-lg">Call Us</h3>
                               <p className="text-secondary/60">Mon-Fri from 8am to 5pm.</p>
                               <a href="tel:+1555000000" className="text-primary font-medium mt-1 block">+1 (555) 000-0000</a>
                           </div>
                       </div>
                   </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Send us a message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50" placeholder="you@company.com" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50">
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Partnership</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            Send Message
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
