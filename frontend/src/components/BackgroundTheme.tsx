// frontend/src/components/BackgroundTheme.tsx
import { ReactNode } from 'react';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

interface BackgroundThemeProps {
  children: ReactNode;
}

export const BackgroundTheme = ({ children }: BackgroundThemeProps) => {
  const { theme } = useTimeBasedTheme();

  return (
    <div className={`relative w-full min-h-screen transition-all duration-1000 ease-in-out ${theme.backgroundColor}`}>
      {/* Animated background overlay with stars for evening */}
      {theme.timeOfDay === 'evening' && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: Math.random() * 2 + 'px',
                  height: Math.random() * 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.7 + 0.3,
                  animationDuration: Math.random() * 3 + 2 + 's',
                }}
              />
            ))}
          </div>

          {/* Moon */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-slate-200/40 shadow-2xl" />
        </div>
      )}

      {/* Sun for morning */}
      {theme.timeOfDay === 'morning' && (
        <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-yellow-300/40 shadow-2xl blur-xl animate-pulse" />
      )}

      {/* Sun for midday */}
      {theme.timeOfDay === 'midday' && (
        <div className="absolute top-4 right-6 w-40 h-40 rounded-full bg-yellow-300/50 shadow-2xl blur-2xl" />
      )}

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${theme.gradientOverlay} pointer-events-none`} />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundTheme;