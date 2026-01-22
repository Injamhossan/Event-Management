
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf9]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-secondary text-white">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                We Bring People Together
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                EventHub is the world's leading platform for creators, organizers, and attendees to connect, share, and experience memorable moments.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
              <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden aspect-square">
                      <img 
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" 
                        alt="Teamworking" 
                        className="w-full h-full object-cover"
                      />
                  </div>
              </div>
              <div className="w-full md:w-1/2">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Mission</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mt-3 mb-6">
                      Empowering Creators to Build Communities
                  </h2>
                  <p className="text-secondary/60 text-lg leading-relaxed mb-6">
                      We believe that real connection happens when people gather around shared passions. Our mission is to provide the tools, technology, and support needed to turn any idea into a successful event.
                  </p>
                  <p className="text-secondary/60 text-lg leading-relaxed">
                      Whether it's a small workshop or a global conference, EventHub makes the complex process of organizing events simple, intuitive, and fun.
                  </p>
              </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  {
                      icon: Target,
                      title: "Innovation",
                      desc: "We constantly push boundaries to create better experiences."
                  },
                  {
                      icon: Users,
                      title: "Community",
                      desc: "We foster inclusive spaces where everyone belongs."
                  },
                  {
                      icon: Shield,
                      title: "Trust",
                      desc: "We prioritize safety, security, and transparency."
                  },
                  {
                      icon: Award,
                      title: "Excellence",
                      desc: "We are committed to quality in everything we do."
                  }
              ].map((value, i) => {
                  const Icon = value.icon;
                  return (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                        <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary flex items-center justify-center mx-auto mb-6">
                            <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-secondary mb-3">{value.title}</h3>
                        <p className="text-secondary/60">{value.desc}</p>
                    </div>
                  )
              })}
          </div>
      </div>

      <Footer />
    </div>
  );
}
