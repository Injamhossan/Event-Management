
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Hosting a Successful Virtual Summit",
    category: "Guides",
    date: "Jan 12, 2026",
    excerpt: "Learn the secrets to engaging your audience and managing speakers in a virtual environment.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "The Future of Hybrid Events: What You Need to Know",
    category: "Trends",
    date: "Jan 08, 2026",
    excerpt: "Explore how hybrid events are reshaping the industry and what tools you need to succeed.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "How to Market Your Event on Social Media",
    category: "Marketing",
    date: "Dec 28, 2025",
    excerpt: "A comprehensive guide to boosting ticket sales through Instagram, LinkedIn, and Twitter.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60"
  },
   {
    id: 4,
    title: "Sustainable Events: A Green Guide for Organizers",
    category: "Sustainability",
    date: "Dec 15, 2025",
    excerpt: "Practical steps to reduce the carbon footprint of your next large-scale conference.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?w=800&auto=format&fit=crop&q=60"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf9]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                 <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Blog</span>
                 <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary mt-3 mb-6">
                    Stories & Insights
                 </h1>
                 <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
                     Expert advice, industry trends, and inspiration for event organizers and creators.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                {blogPosts.map((post, index) => (
                    <div key={post.id} className={`group ${index === 0 ? 'md:col-span-2 grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all' : 'bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all'}`}>
                        <div className={`rounded-2xl overflow-hidden ${index === 0 ? 'h-64 md:h-80' : 'h-64'}`}>
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className={`${index === 0 ? '' : 'p-6'}`}>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-orange-50 rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-xs text-secondary/40 font-medium">{post.date}</span>
                            </div>
                            <h2 className={`font-serif font-bold text-secondary group-hover:text-primary transition-colors ${index === 0 ? 'text-3xl mb-4' : 'text-xl mb-3'}`}>
                                {post.title}
                            </h2>
                            <p className={`text-secondary/60 ${index === 0 ? 'text-lg mb-6' : 'text-sm mb-6 line-clamp-2'}`}>
                                {post.excerpt}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                                Read Article
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
