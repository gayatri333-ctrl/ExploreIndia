'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Bookmark, LogIn, LogOut, Shield, Sparkles, X, Mail, Key } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';

export default function UserMenu() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
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
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }
      setShowAuthModal(false);
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {user ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-marigold-500/30 text-xs font-semibold text-white transition"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-marigold-500 to-vermilion-500 flex items-center justify-center text-slate-950 font-bold text-[10px]">
            {user.email?.[0].toUpperCase() || 'U'}
          </div>
          <span className="max-w-[90px] truncate">{user.email?.split('@')[0]}</span>
        </button>
      ) : (
        <button
          onClick={() => setShowAuthModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950 text-xs font-bold transition shadow-sm"
        >
          <LogIn className="w-3.5 h-3.5" />
          <span>Sign In</span>
        </button>
      )}

      {/* User Dropdown Menu */}
      {isOpen && user && (
        <div className="absolute right-0 mt-2 w-56 bg-primary-dark-900 border border-slate-700 rounded-md shadow-xl py-2 z-50 animate-fadeIn text-xs">
          <div className="px-4 py-2 border-b border-slate-800">
            <div className="font-semibold text-white truncate">{user.email}</div>
            <div className="text-[10px] text-slate-400">Explorer Account</div>
          </div>

          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-slate-800 text-slate-200 hover:text-white transition"
          >
            <User className="w-4 h-4 text-marigold-400" />
            <span>My Profile</span>
          </Link>

          <Link
            href="/bookmarks"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-slate-800 text-slate-200 hover:text-white transition"
          >
            <Bookmark className="w-4 h-4 text-vermilion-500" />
            <span>My Bookmarks</span>
          </Link>

          <div className="border-t border-slate-800 my-1" />

          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-red-500/10 text-rose-400 hover:text-rose-300 transition text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}

      {/* Supabase Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-primary-dark-900 border border-slate-700 rounded-md p-6 shadow-2xl space-y-5">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-marigold-500/20 text-marigold-400 mx-auto flex items-center justify-center border border-marigold-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white font-serif">
                {authMode === 'signin' ? 'Welcome Back' : 'Create Explorer Account'}
              </h2>
              <p className="text-xs text-slate-400">
                Save bookmarks, personalize festival alerts & curate itineraries
              </p>
            </div>

            {authError && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-rose-300 text-xs rounded">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
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
                    className="w-full bg-slate-950 border border-slate-700 rounded py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none focus:border-marigold-500"
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
                    className="w-full bg-slate-950 border border-slate-700 rounded py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none focus:border-marigold-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950 font-bold py-2.5 rounded text-xs transition flex items-center justify-center gap-2 shadow-md"
              >
                {authLoading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>{authMode === 'signin' ? 'Sign In to Account' : 'Register Account'}</span>
                  </>
                )}
              </button>
            </form>

            <div className="text-center pt-2 text-xs text-slate-400">
              {authMode === 'signin' ? (
                <span>
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => { setAuthMode('signup'); setAuthError(null); }}
                    className="text-marigold-400 font-semibold underline"
                  >
                    Register here
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setAuthMode('signin'); setAuthError(null); }}
                    className="text-marigold-400 font-semibold underline"
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
