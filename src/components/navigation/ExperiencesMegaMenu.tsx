'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Check, ChevronDown, ChevronRight, RotateCcw, Filter, X, ArrowRight } from 'lucide-react';
import { EXPERIENCE_TOPICS, ZONES } from '@/lib/data/navigation-data';

interface ExperiencesMegaMenuProps {
  onClose: () => void;
}

export default function ExperiencesMegaMenu({ onClose }: ExperiencesMegaMenuProps) {
  const router = useRouter();
  
  // Active selected main topics and subtopics
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSubTopics, setSelectedSubTopics] = useState<string[]>([]);
  const [expandedTopics, setExpandedTopics] = useState<string[]>(['wildlife', 'heritage']);
  
  // Selected region zones
  const [selectedZones, setSelectedZones] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    if (expandedTopics.includes(id)) {
      setExpandedTopics(expandedTopics.filter(t => t !== id));
    } else {
      setExpandedTopics([...expandedTopics, id]);
    }
  };

  const toggleTopic = (topicName: string) => {
    if (selectedTopics.includes(topicName)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topicName));
    } else {
      setSelectedTopics([...selectedTopics, topicName]);
    }
  };

  const toggleSubTopic = (subTopicName: string) => {
    if (selectedSubTopics.includes(subTopicName)) {
      setSelectedSubTopics(selectedSubTopics.filter(s => s !== subTopicName));
    } else {
      setSelectedSubTopics([...selectedSubTopics, subTopicName]);
    }
  };

  const toggleZone = (zoneId: string) => {
    if (selectedZones.includes(zoneId)) {
      setSelectedZones(selectedZones.filter(z => z !== zoneId));
    } else {
      setSelectedZones([...selectedZones, zoneId]);
    }
  };

  const handleClearAll = () => {
    setSelectedTopics([]);
    setSelectedSubTopics([]);
    setSelectedZones([]);
  };

  const handleApply = () => {
    const params = new URLSearchParams();
    if (selectedTopics.length > 0) params.set('topics', selectedTopics.join(','));
    if (selectedSubTopics.length > 0) params.set('subtopics', selectedSubTopics.join(','));
    if (selectedZones.length > 0) params.set('zones', selectedZones.join(','));

    router.push(`/experiences?${params.toString()}`);
    onClose();
  };

  const activeChips = [
    ...selectedTopics.map(t => ({ label: t, type: 'topic' as const })),
    ...selectedSubTopics.map(s => ({ label: s, type: 'subtopic' as const })),
    ...selectedZones.map(z => ({ label: `${z} Zone`, type: 'zone' as const })),
  ];

  return (
    <div className="w-full bg-primary-dark-900/98 backdrop-blur-xl border-b border-slate-700/60 shadow-2xl text-slate-200 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
        {/* Top Header & Active Filter Chips Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-marigold-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif tracking-wide">
                Experience Discovery Engine
              </h2>
              <p className="text-xs text-slate-400">
                Filter by 11 Curated Topics, Sub-Interests & Regional Indian Zones
              </p>
            </div>
          </div>

          {/* Active Chips & "Clear All" */}
          {activeChips.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-400 font-medium">Active Filters ({activeChips.length}):</span>
              {activeChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-marigold-300 text-xs"
                >
                  <span>{chip.label}</span>
                  <button
                    onClick={() => {
                      if (chip.type === 'topic') toggleTopic(chip.label);
                      else if (chip.type === 'subtopic') toggleSubTopic(chip.label);
                      else toggleZone(chip.label.replace(' Zone', ''));
                    }}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              <button
                onClick={handleClearAll}
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold underline flex items-center gap-1 ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>

        {/* Mega Menu Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column (8 cols): 11 Topic Checkboxes + Expandable Sub-items */}
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-marigold-400 flex items-center gap-2 mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Experience Topics & Sub-Interests (11 Categories)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-2">
              {EXPERIENCE_TOPICS.map((topic) => {
                const isExpanded = expandedTopics.includes(topic.id);
                const isChecked = selectedTopics.includes(topic.name);

                return (
                  <div
                    key={topic.id}
                    className={`p-3 rounded-md border transition-all ${
                      isChecked
                        ? 'bg-slate-950/90 border-marigold-500/50 shadow-md'
                        : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Main Topic Row */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2.5 cursor-pointer flex-1">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleTopic(topic.name)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-marigold-500 focus:ring-marigold-500"
                        />
                        <span className={`text-sm font-semibold ${isChecked ? 'text-marigold-300' : 'text-white'}`}>
                          {topic.name}
                        </span>
                      </label>

                      <button
                        onClick={() => toggleExpanded(topic.id)}
                        className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition"
                        title="Toggle Sub-items"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-marigold-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Expandable Sub-items */}
                    {isExpanded && (
                      <div className="mt-3 pt-2 border-t border-slate-800/80 space-y-1.5 pl-6">
                        {topic.subTopics.map((sub, sIdx) => {
                          const isSubChecked = selectedSubTopics.includes(sub);

                          return (
                            <label
                              key={sIdx}
                              className="flex items-center gap-2 text-xs cursor-pointer hover:text-white transition"
                            >
                              <input
                                type="checkbox"
                                checked={isSubChecked}
                                onChange={() => toggleSubTopic(sub)}
                                className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                              />
                              <span className={isSubChecked ? 'text-cyan-300 font-semibold' : 'text-slate-300'}>
                                {sub}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (4 cols): Region Zone Filter */}
          <div className="md:col-span-4 space-y-3 border-l border-slate-800 pl-0 md:pl-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Region Filter (6 Zones)</span>
            </h3>

            <div className="space-y-2">
              {ZONES.map((zone) => {
                const isZoneChecked = selectedZones.includes(zone.id);

                return (
                  <label
                    key={zone.id}
                    className={`flex items-start gap-3 p-3 rounded-md border cursor-pointer transition ${
                      isZoneChecked
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-white'
                        : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isZoneChecked}
                      onChange={() => toggleZone(zone.id)}
                      className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>{zone.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {zone.desc}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Actions: "Apply" and "Clear" */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-4">
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Filters</span>
          </button>

          <button
            onClick={handleApply}
            className="flex items-center gap-2 px-6 py-2.5 rounded bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950 font-bold text-xs shadow-lg transition"
          >
            <span>Apply Selected Filters ({activeChips.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
