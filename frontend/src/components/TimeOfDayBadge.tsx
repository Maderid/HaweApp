// frontend/src/components/TimeOfDayBadge.tsx
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

export const TimeOfDayBadge = () => {
  const { theme, hour } = useTimeBasedTheme();

  return (
    <div className={`inline-block px-4 py-2 rounded-lg ${theme.cardBgColor} ${theme.textColor} text-sm font-semibold`}>
      {theme.timeOfDay === 'morning' && `🌅 Morning (${hour}:00) - ${theme.description}`}
      {theme.timeOfDay === 'midday' && `☀️ Midday (${hour}:00) - ${theme.description}`}
      {theme.timeOfDay === 'evening' && `🌙 Evening (${hour}:00) - ${theme.description}`}
    </div>
  );
};

export default TimeOfDayBadge;