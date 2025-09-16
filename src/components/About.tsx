import React from 'react';
import { User, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <User className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Sobre mí
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex justify-center mb-6">
            <Zap className="w-12 h-12 text-violet-600" />
          </div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Soy ingeniera de sistemas apasionada por la automatización de procesos con{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Power Automate</span> (cloud y desktop),{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">SQL Server</span>,{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Power BI</span>,{' '}
           <span className="font-semibold text-blue-600 dark:text-blue-400">Excel</span> y{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Python</span>. Me gusta optimizar tareas repetitivas 
            y compartir conocimiento con la comunidad tecnológica.
          </p>
        </div>
      </div>
    </section>
  );
}