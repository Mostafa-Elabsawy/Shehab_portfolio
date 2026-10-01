import { Injectable, signal } from '@angular/core';

export interface AccentTheme {
  id: string;
  label: string;
  accent: string;      // --green
  accentDark: string;  // --green-dark
  accentRgb: string;   // --green-rgb, e.g. "20, 188, 255"
}

export type Mode = 'dark' | 'light';

interface ModePalette {
  bg: string;
  bg2: string;
  card: string;
  text: string;
  text2: string;
  border: string;
  headerBg: string;
  gridLine: string;
}

const ACCENT_KEY = 'portfolio-accent';
const MODE_KEY = 'portfolio-mode';

export const ACCENTS: AccentTheme[] = [
  {
    id: 'cyan',
    label: 'Cyber Cyan',
    accent: '#14bcff',
    accentDark: '#2bc3d1',
    accentRgb: '20, 188, 255',
  },
  {
    id: 'green',
    label: 'Electric Green',
    accent: '#39ff14',
    accentDark: '#0f3d14',
    accentRgb: '57, 255, 20',
  },
  {
    id: 'purple',
    label: 'Neon Purple',
    accent: '#b14eff',
    accentDark: '#4b1f80',
    accentRgb: '177, 78, 255',
  },
  {
    id: 'orange',
    label: 'Signal Orange',
    accent: '#ff8a1e',
    accentDark: '#7a3b0e',
    accentRgb: '255, 138, 30',
  },
  {
    id: 'pink',
    label: 'Hot Pink',
    accent: '#ff2e92',
    accentDark: '#7a1440',
    accentRgb: '255, 46, 146',
  },
];

const PALETTES: Record<Mode, ModePalette> = {
  dark: {
    bg: '#050505',
    bg2: '#0a0a0a',
    card: '#111111',
    text: '#f5f5f5',
    text2: '#a1a1aa',
    border: '#1f2937',
    headerBg: 'rgba(5, 5, 5, 0.72)',
    gridLine: 'rgba(255, 255, 255, 0.025)',
  },
  light: {
    bg: '#fafafa',
    bg2: '#f2f2f3',
    card: '#ffffff',
    text: '#0a0a0a',
    text2: '#52525b',
    border: '#e4e4e7',
    headerBg: 'rgba(255, 255, 255, 0.72)',
    gridLine: 'rgba(0, 0, 0, 0.045)',
  },
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly accents = ACCENTS;

  readonly currentAccent = signal<AccentTheme>(this.resolveInitialAccent());
  readonly currentMode = signal<Mode>(this.resolveInitialMode());

  constructor() {
    this.applyAccent(this.currentAccent());
    this.applyMode(this.currentMode());
  }

  setAccent(id: string): void {
    const accent = this.accents.find((a) => a.id === id);
    if (!accent) return;

    this.currentAccent.set(accent);
    this.applyAccent(accent);
    this.persist(ACCENT_KEY, accent.id);
  }

  setMode(mode: Mode): void {
    this.currentMode.set(mode);
    this.applyMode(mode);
    this.persist(MODE_KEY, mode);
  }

  toggleMode(): void {
    this.setMode(this.currentMode() === 'dark' ? 'light' : 'dark');
  }

  private applyAccent(accent: AccentTheme): void {
    const root = document.documentElement.style;
    root.setProperty('--green', accent.accent);
    root.setProperty('--green-dark', accent.accentDark);
    root.setProperty('--green-rgb', accent.accentRgb);
  }

  private applyMode(mode: Mode): void {
    const palette = PALETTES[mode];
    const root = document.documentElement.style;
    root.setProperty('--bg', palette.bg);
    root.setProperty('--bg-2', palette.bg2);
    root.setProperty('--card', palette.card);
    root.setProperty('--text', palette.text);
    root.setProperty('--text-2', palette.text2);
    root.setProperty('--border', palette.border);
    root.setProperty('--header-bg', palette.headerBg);
    root.setProperty('--grid-line', palette.gridLine);

    // Lets form controls, scrollbars, etc. match the active mode automatically.
    document.documentElement.style.colorScheme = mode;
  }

  private persist(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // localStorage can throw in private browsing / disabled-storage contexts — safe to ignore.
    }
  }

  private resolveInitialAccent(): AccentTheme {
    try {
      const savedId = localStorage.getItem(ACCENT_KEY);
      const saved = this.accents.find((a) => a.id === savedId);
      if (saved) return saved;
    } catch {
      // ignore storage errors, fall through to default
    }
    return this.accents[0];
  }

  private resolveInitialMode(): Mode {
    try {
      const saved = localStorage.getItem(MODE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignore storage errors, fall through to system preference
    }
    const prefersLight =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
}