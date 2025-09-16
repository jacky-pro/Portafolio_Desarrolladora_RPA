import React from 'react';
import { Bot, Code, Moon, Sun } from 'lucide-react';

type HeaderProps = {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
};

export default function Header({ theme = 'light', onToggleTheme }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-violet-600 text-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center relative">
        <button
          aria-label="Cambiar tema"
          onClick={onToggleTheme}
          className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <div className="flex justify-center items-center mb-4">
          <Bot className="w-8 h-8 mr-3" />
          <Code className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Jackelin Nuñez Aguirre
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 font-light">
          Desarrolladora RPA | Power Automate Desktop| Automatización de Procesos
        </p>
        <div className="mt-8 w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
      </div>
    </header>
  );
}