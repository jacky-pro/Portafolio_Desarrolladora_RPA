import React from 'react';
import { User, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh] space-y-6">
            <div className="inline-flex items-center gap-2">
              <Zap className="w-7 h-7 text-violet-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Sobre mí</h2>
            </div>
            <img
              src="/profile.jpg"
              alt="Jackelin Nuñez Aguirre"
              className="h-[150px] w-[150px] rounded-full object-cover shadow-xl ring-4 ring-white/60 dark:ring-white/10 mx-auto"
            />
            <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Soy ingeniera de sistemas <span className="font-semibold">con experiencia</span> diseñando y desplegando soluciones de automatización de extremo a extremo. Transformo procesos manuales en flujos confiables y medibles usando{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Power Automate</span> (cloud y desktop),{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">SQL Server</span>,{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Power BI</span>,{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Excel</span> y{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Python</span>.
              Mi enfoque está en <span className="font-semibold">ahorrar tiempo</span>, <span className="font-semibold">reducir errores</span> y <span className="font-semibold">mostrar resultados con datos</span> en dashboards claros para el negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}