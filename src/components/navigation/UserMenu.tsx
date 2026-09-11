'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Bookmark, LogIn, LogOut, Shield, Sparkles, X, Mail, Key, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';

export default function UserMenu() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);
    const supabase = createClient();

    try {
      if (authMode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName || email.split('@')[0],
            },
          },
        });
        if (error) throw error;
      }
      setShowAuthModal(false);
      setEmail('');
      setPassword('');
      setFullName('');
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setIsOpen(false);
  };

  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'Explorer';

  return (
    <div className="relative" ref={dropdownRef}>
      {user ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-900 hover:bg-royal-800 border border-saffron-500/40 text-xs font-semibold text-white transition shadow-sm"
          title={`Signed in as ${displayName}`}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-saffron-500 to-amber-600 flex items-center justify-center text-royal-950 font-bold text-[10px]">
            {displayName[0].toUpperCase()}
          </div>
          <span className="max-w-[120px] truncate text-slate-100 font-medium">Hi, {displayName}</span>
        </button>
      ) : (
        <button
          onClick={() => setShowAuthModal(true)}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-royal-950 text-xs font-bold transition shadow-glow-marigold"
        >
          <LogIn className="w-3.5 h-3.5" />
          <span>Sign In</span>
        </button>
      )}

      {/* User Dropdown Menu */}
      {isOpen && user && (
        <div className="absolute right-0 mt-2 w-60 bg-royal-950 border border-white/15 rounded-xl shadow-2xl py-2 z-50 animate-fadeIn text-xs backdrop-blur-xl">
          <div className="px-4 py-2.5 border-b border-white/10 space-y-0.5">
            <div className="font-bold text-white truncate text-sm">Hi, {displayName}</div>
            <div className="text-[10px] text-slate-400 truncate">{user.email}</div>
          </div>

          <Link
            href="/bookmarks"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-royal-900 text-slate-200 hover:text-saffron-400 transition"
          >
            <Bookmark className="w-4 h-4 text-saffron-400" />
            <span>Saved Bookmarks</span>
          </Link>

          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-royal-900 text-slate-200 hover:text-white transition"
          >
            <User className="w-4 h-4 text-peacock-400" />
            <span>My Profile</span>
          </Link>

          <div className="border-t border-white/10 my-1" />

          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 transition text-left font-semibold"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}

      {/* Supabase Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-royal-900 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg bg-royal-950/60 border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-saffron-500/20 text-saffron-400 mx-auto flex items-center justify-center border border-saffron-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">
                {authMode === 'signin' ? 'Welcome Back' : 'Create Explorer Account'}
              </h2>
              <p className="text-xs text-slate-400">
                Save bookmarks, personalize festival alerts & curate itineraries
              </p>
            </div>

            {authError && (
              <div className="p-3 bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs rounded-xl font-medium">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === 'signup' && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Full Name</label>
                  <div className="relative flex items-center">
                    <UserCheck className="w-4 h-4 text-slate-400 absolute left-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-royal-950 border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none focus:border-saffron-500"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="explorer@example.com"
                    className="w-full bg-royal-950 border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none focus:border-saffron-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Password</label>
                <div className="relative flex items-center">
                  <Key className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-royal-950 border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none focus:border-saffron-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-royal-950 font-bold py-3 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-glow-saffron"
              >
                {authLoading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>{authMode === 'signin' ? 'Sign In to Account' : 'Register Explorer Account'}</span>
                  </>
                )}
              </button>
            </form>

            <div className="text-center pt-2 text-xs text-slate-400 border-t border-white/5">
              {authMode === 'signin' ? (
                <span>
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => { setAuthMode('signup'); setAuthError(null); }}
                    className="text-saffron-400 font-semibold underline hover:text-white"
                  >
                    Register here
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setAuthMode('signin'); setAuthError(null); }}
                    className="text-saffron-400 font-semibold underline hover:text-white"
                  >
                    Sign in here
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
