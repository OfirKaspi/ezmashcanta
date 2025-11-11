'use client';
import { createContext, useContext, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Theme = 'light' | 'dark';
interface Ctx {
  theme: Theme;
  setTheme: (t: Theme) => void;
}
const ThemeContext = createContext<Ctx | undefined>(undefined);

/* ── helpers ──────────────────────────────────────────────── */
function readThemeCookie(): Theme | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(/(?:^|; )theme=(light|dark)/);
  return (m ? m[1] : null) as Theme | null;
}

function fallbackTheme(): Theme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
/* ─────────────────────────────────────────────────────────── */

export function ThemeProvider({
  initialTheme,
  children
}: {
  initialTheme: Theme;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [theme, setThemeState] = useState<Theme>(
    initialTheme ?? readThemeCookie() ?? fallbackTheme()
  );

  const setTheme = (next: Theme) => {
    setThemeState(next);
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
    router.refresh(); // trigger SSR with new cookie
  };

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
