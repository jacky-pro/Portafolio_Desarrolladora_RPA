import React from 'react';
import { Bot, Cloud, Database, FileSpreadsheet, Code, BarChart3 } from 'lucide-react';

const skills = [
  { name: 'Power Automate Desktop', icon: Bot, color: 'text-blue-600 bg-blue-100' },
  { name: 'Power Automate Cloud', icon: Cloud, color: 'text-violet-600 bg-violet-100' },
  { name: 'SQL Server', icon: Database, color: 'text-green-600 bg-green-100' },
  { name: 'Excel', icon: FileSpreadsheet, color: 'text-orange-600 bg-orange-100' },
  { name: 'Python', icon: Code, color: 'text-purple-600 bg-purple-100' },
  { name: 'Power BI', icon: BarChart3, color: 'text-yellow-600 bg-yellow-100'}
];

export default function Skills() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Habilidades
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tecnologías y herramientas que domino para crear soluciones de automatización
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 bg-white dark:bg-gray-800"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${skill.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm leading-tight">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}