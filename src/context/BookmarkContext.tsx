'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BookmarkItem {
  id: string;
  title: string;
  type: 'destination' | 'attraction' | 'festival' | 'itinerary';
  link: string;
  image: string;
  subtitle?: string;
  badge?: string;
  savedAt: string;
}

interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (item: Omit<BookmarkItem, 'savedAt'>) => boolean;
  removeBookmark: (id: string) => void;
  clearAllBookmarks: () => void;
  bookmarkCount: number;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const STORAGE_KEY = 'exploreindia_bookmarks_v1';

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBookmarks(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load bookmarks from localStorage:', e);
    }
  }, []);

  const saveToStorage = (items: BookmarkItem[]) => {
    setBookmarks(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save bookmarks to localStorage:', e);
    }
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some((b) => b.id === id);
  };

  const toggleBookmark = (item: Omit<BookmarkItem, 'savedAt'>): boolean => {
    const exists = bookmarks.some((b) => b.id === item.id);
    if (exists) {
      const updated = bookmarks.filter((b) => b.id !== item.id);
      saveToStorage(updated);
      return false;
    } else {
      const newItem: BookmarkItem = {
        ...item,
        savedAt: new Date().toISOString(),
      };
      const updated = [newItem, ...bookmarks];
      saveToStorage(updated);
      return true;
    }
  };

  const removeBookmark = (id: string) => {
    const updated = bookmarks.filter((b) => b.id !== id);
    saveToStorage(updated);
  };

  const clearAllBookmarks = () => {
    saveToStorage([]);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isBookmarked,
        toggleBookmark,
        removeBookmark,
        clearAllBookmarks,
        bookmarkCount: bookmarks.length,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}
