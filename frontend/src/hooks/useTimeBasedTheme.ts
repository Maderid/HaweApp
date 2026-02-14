// frontend/src/hooks/useTimeBasedTheme.ts
import { useEffect, useState } from 'react';

export type TimeOfDay = 'morning' | 'midday' | 'evening';

interface ThemeConfig {
  timeOfDay: TimeOfDay;
  backgroundColor: string;
  accentColors: string[];
  gradientOverlay: string;
  textColor: string;
  cardBgColor: string;
  description: string;
}

const THEME_CONFIGS: Record<TimeOfDay, ThemeConfig> = {
  morning: {
    timeOfDay: 'morning',
    backgroundColor: 'bg-gradient-to-b from-amber-100 via-orange-50 to-pink-100',
    accentColors: ['#D97706', '#92400E', '#F97316', '#FCA5A5'],
    gradientOverlay: 'bg-gradient-to-br from-orange-400/20 via-amber-300/10 to-pink-200/20',
    textColor: 'text-amber-900',
    cardBgColor: 'bg-white/70 backdrop-blur-md',
    description: 'Coffee, sunrise, and morning vibes',
  },
  midday: {
    timeOfDay: 'midday',
    backgroundColor: 'bg-gradient-to-b from-blue-200 via-cyan-100 to-green-100',
    accentColors: ['#7C3AED', '#10B981', '#22D3EE', '#84CC16'],
    gradientOverlay: 'bg-gradient-to-br from-yellow-300/20 via-green-200/10 to-cyan-200/20',
    textColor: 'text-green-900',
    cardBgColor: 'bg-white/80 backdrop-blur-md',
    description: 'Sunshine, vibrant energy, and nature',
  },
  evening: {
    timeOfDay: 'evening',
    backgroundColor: 'bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950',
    accentColors: ['#818CF8', '#06B6D4', '#8B5CF6', '#EC4899'],
    gradientOverlay: 'bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-slate-900/40',
    textColor: 'text-slate-100',
    cardBgColor: 'bg-slate-800/60 backdrop-blur-md border border-slate-700/30',
    description: 'Stars, moon, and space vibes',
  },
};

export const useTimeBasedTheme = () => {
  const [theme, setTheme] = useState<ThemeConfig>(THEME_CONFIGS.morning);
  const [hour, setHour] = useState<number>(new Date().getHours());

  useEffect(() => {
    const updateTime = () => {
      const currentHour = new Date().getHours();
      setHour(currentHour);

      let timeOfDay: TimeOfDay = 'morning';
      if (currentHour >= 10 && currentHour < 18) {
        timeOfDay = 'midday';
      } else if (currentHour >= 18 || currentHour < 6) {
        timeOfDay = 'evening';
      }

      setTheme(THEME_CONFIGS[timeOfDay]);
    };

    updateTime();

    // Update theme every minute
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return { theme, hour };
};

export default useTimeBasedTheme;