import React from 'react';
import { Bot, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Bot className="w-6 h-6 mr-2 text-blue-400" />
            <span className="font-semibold text-lg">Jackelin Nuñez Aguirre</span>
          </div>
          
          <p className="text-gray-400 dark:text-gray-400 mb-4">
            Especialista en automatización de procesos con Power Automate Desktop
          </p>
          
          <div className="flex justify-center items-center text-sm text-gray-500 dark:text-gray-400">
            <span>Desarrollado con</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>para la comunidad RPA</span>
          </div>
          
          <div className="mt-3">
            <a
              href="mailto:jklnug08@gmail.com"
              className="text-sm text-blue-300 hover:text-white underline-offset-4 hover:underline"
            >
              jklnuag08@gmail.com
            </a>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 dark:border-gray-700/60">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 Jackelin Nuñez Aguirre. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}