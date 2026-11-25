/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { EditorialHeroAndPreamble } from './components/EditorialHeroAndPreamble';
import { VolumeCatalog31 } from './components/VolumeCatalog31';
import { SeerahReader } from './components/SeerahReader';
import { LifeComparisonMirror } from './components/LifeComparisonMirror';
import { Footer } from './components/Footer';

const BOOKMARKS_KEY = 'seerah_sahabah_bookmarks_v1';
const THEME_KEY = 'seerah_sahabah_dark_v1';

export default function App() {
  const [selectedVolumeNumber, setSelectedVolumeNumber] = useState<number>(1);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_KEY);
      return saved ? (JSON.parse(saved) as string[]) : ['abu-bakr-al-siddiq', 'bilal-ibn-rabah'];
    } catch {
      return ['abu-bakr-al-siddiq', 'bilal-ibn-rabah'];
    }
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem(THEME_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_KEY, String(isDarkMode));
    } catch {
      // Ignore storage error
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch {
      // Ignore storage error
    }
  }, [bookmarks]);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenVolume = (volumeNumber: number) => {
    setSelectedVolumeNumber(volumeNumber);
    scrollToElement('seerah-reader');
  };

  const handleToggleBookmark = (bioId: string) => {
    setBookmarks((prev) =>
      prev.includes(bioId) ? prev.filter((id) => id !== bioId) : [...prev, bioId]
    );
  };

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F3] text-[#1C1917] dark:bg-[#141210] dark:text-[#F3EFE6]">
      <Header onJumpToReader={() => scrollToElement('seerah-reader')} />

      <main>
        <EditorialHeroAndPreamble
          onStartReading={() => handleOpenVolume(1)}
          onExploreVolumes={() => scrollToElement('volumes-31')}
        />

        <VolumeCatalog31
          selectedVolumeNumber={selectedVolumeNumber}
          onSelectVolume={handleOpenVolume}
        />

        <SeerahReader
          selectedVolumeNumber={selectedVolumeNumber}
          onSelectVolume={(vol) => setSelectedVolumeNumber(vol)}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((d) => !d)}
        />

        <LifeComparisonMirror
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
          onOpenVolume={handleOpenVolume}
        />
      </main>

      <Footer />
    </div>
  );
}
