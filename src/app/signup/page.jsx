
"use client";
import Link from 'next/link';
import { User, Mail, Lock, CheckCircle, Github, Loader2 } from 'lucide-react';
import { useContext, useState } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const { createUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
    }

    setIsLoading(true);
    try {
        // 1. Create User
        const result = await createUser(email, password);
        const user = result.user;
        
        // 2. Update Profile
        await updateUserProfile(name, "https://i.ibb.co/tYw53pS/user-dummy.png"); // Default avatar

        toast.success("Account created successfully!");
        router.push('/dashboard'); 
    } catch (error) {
        console.error(error);
        if (error.code === 'auth/email-already-in-use') {
             toast.error("Email is already registered");
        } else {
             toast.error(error.message);
        }
    } finally {
        setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
      try {
          await googleSignIn();
          toast.success("Signed in with Google!");
          router.push('/dashboard');
      } catch (error) {
          console.error(error);
          toast.error("Google sign in failed");
      }
  }

  const handleGithubSignIn = async () => {
    try {
        await githubSignIn();
        toast.success("Signed in with Github!");
        router.push('/dashboard');
    } catch (error) {
        console.error(error);
        toast.error("Github sign in failed");
    }
}

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#3e3431] overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1514525253440-b393452eeb25?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        
        <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">EventHub</span>
          </Link>

          <div>
             <h2 className="font-serif text-4xl font-bold mb-6">Join the Community</h2>
             <ul className="space-y-4 mb-4">
                {[
                  'Create unlimited events used by thousands',
                  'Secure payment processing & ticketing',
                  'Real-time analytics and tracking',
                  'Access to our organizer community'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-white/80">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    {item}
                  </li>
                ))}
             </ul>
          </div>
          
           <div className="flex items-center gap-2 text-sm text-white/40">
              © 2026 EventHub Inc.
           </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary">Create an account</h2>
            <p className="mt-2 text-secondary/60">
              Start your journey with EventHub today
            </p>
          </div>

          <form onSubmit={handleSignUp} className="mt-8 space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <label className="text-xs font-semibold uppercase tracking-wide text-secondary/70 mb-2 block">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary/40">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-secondary placeholder-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-semibold uppercase tracking-wide text-secondary/70 mb-2 block">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary/40">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-secondary placeholder-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-semibold uppercase tracking-wide text-secondary/70 mb-2 block">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary/40">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-secondary placeholder-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    placeholder="Create a password"
                  />
                </div>
                <p className="mt-2 text-xs text-secondary/50">
                  Must be at least 6 characters long
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/20 text-sm font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
            </button>

             <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-secondary/50">Or register with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleGithubSignIn} type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Github className="w-5 h-5 text-secondary" />
              </button>
              <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all">
                 <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
            </div>

            <p className="text-center text-sm text-secondary/60">
              Already have an account?{' '}
              <Link href="/signin" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
