'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

export default function ThemeDropdown({ className = '' }: { className?: string }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const changeTheme = (next: Theme) => {
    setTheme(next);
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
    router.refresh();
  };

  const icon = theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Toggle theme"
          className={cn(
            'inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm',
            className
          )}
        >
          {icon}
          <span className="hidden md:inline capitalize">{theme}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => changeTheme('light')}>
          <Sun className="mr-2 h-4 w-4" /> Light
          {theme === 'light' && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => changeTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" /> Dark
          {theme === 'dark' && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
