'use client';

import { useState } from 'react';
import { X, Check, Globe, DollarSign, Sparkles } from 'lucide-react';
import { PLAN_YOUR_TRIP_HUB } from '@/lib/data/incredible-india-data';

interface CurrencyLanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency?: string;
  currentLanguage?: string;
  onSelectCurrency?: (code: string) => void;
  onSelectLanguage?: (code: string) => void;
}

export default function CurrencyLanguageModal({
  isOpen,
  onClose,
  currentCurrency = 'INR',
  currentLanguage = 'EN',
  onSelectCurrency,
  onSelectLanguage,
}: CurrencyLanguageModalProps) {
  const [selectedCurr, setSelectedCurr] = useState(currentCurrency);
  const [selectedLang, setSelectedLang] = useState(currentLanguage);

  if (!isOpen) return null;

  const handleSave = () => {
    if (onSelectCurrency) onSelectCurrency(selectedCurr);
    if (onSelectLanguage) onSelectLanguage(selectedLang);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-950/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="relative w-full max-w-lg glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6 bg-royal-900/90 text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-serif">Regional Preferences</h2>
              <p className="text-xs text-slate-400">Select display currency and portal language</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-royal-950/60 hover:bg-royal-800 text-slate-400 hover:text-white border border-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency Selector */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-400">
            <DollarSign className="w-4 h-4" />
            <span>1. Select Preferred Currency</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PLAN_YOUR_TRIP_HUB.currencies.map((curr) => {
              const isSelected = selectedCurr === curr.code;
              return (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurr(curr.code)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition ${
                    isSelected
                      ? 'bg-saffron-500/20 border-saffron-500 text-saffron-300 font-bold'
                      : 'bg-royal-950/60 border-white/10 text-slate-300 hover:border-saffron-500/30'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{curr.flag}</span>
                    <span>{curr.code} ({curr.symbol})</span>
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-saffron-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Language Selector */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-peacock-400">
            <Globe className="w-4 h-4" />
            <span>2. Select Portal Language</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {PLAN_YOUR_TRIP_HUB.languages.map((lang) => {
              const isSelected = selectedLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-peacock-500/20 border-peacock-500 text-peacock-300 font-bold'
                      : 'bg-royal-950/60 border-white/10 text-slate-300 hover:border-peacock-500/30'
                  }`}
                >
                  <span className="text-xs font-semibold">{lang.name}</span>
                  <span className="text-[10px] text-slate-400">{lang.native}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-2">
          <button
            onClick={handleSave}
            className="w-full py-3 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-royal-950 font-bold text-xs shadow-glow-saffron transition"
          >
            Apply Preferences ({selectedCurr} | {selectedLang})
          </button>
        </div>
      </div>
    </div>
  );
}
