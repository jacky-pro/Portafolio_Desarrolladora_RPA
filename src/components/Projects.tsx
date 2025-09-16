import React from 'react';
import { FileText, Database, MessageSquare, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Bot para Registro de Compras ',
    description: 'Desarrollo de bot con Power Automate Desktop para la descarga y procesamiento automático de reportes , reduciendo el tiempo de procesamiento en un 80%.',
    tech: 'Power Automate Desktop',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    link:'https://github.com/jacky-pro/Bot-RPA---Impuesto-Registro-de-Compras'
  },
  {
    title: 'Bot para Gestión de Trámites Vehiculares',
    description: 'Desarrollo de bot para registro , integrando facturación electrónica y Smartsheet. Automatización de validaciones, descargas/cargas de archivos y reportes.',
    tech: 'Power Automate Desktop + Dynamics+ Python',
    icon: Database,
    color: 'from-violet-500 to-violet-600',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    link:'https://github.com/jacky-pro/Bot-de-Registro-de-Tarjetas-y-Placas-SUNARP-'
  },
  {
    title: 'Bot para Gestión de Proveedores y Socios',
    description: 'Bot RPA que valida y registra socios referidos en Dynamics 365, incluyendo creación de cuentas bancarias flujos de aprobación digital. Integración con portal de proveedores y cumplimiento con normativas de protección de datos personales.',
    tech: 'Power Automate Cloud+API',
    icon: MessageSquare,
    color: 'from-blue-600 to-violet-600',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    link:'https://github.com/jacky-pro/BotPortal_Proveedores-Socio-Referido-Dynamics-365-'
  },
  {
    title: 'StoreCheck Automatizado (Python + Power Automate Desktop)',
    description: 'Desarrollo de un aplicativo en Python para automatizar la selección y consolidación de información de StoreCheck. El flujo se complementó con Power Automate Desktop, encargado de copiar la información consolidada en una plantilla y enviarla automáticamente por correo a las áreas de supervisión.',
    tech: 'Python + Power Automate Desktop',
    icon: FileText,
    color: 'from-green-500 to-blue-500',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    link:'https://github.com/jacky-pro/StoreCheck-Automatizado-Python-Power-Automate-Desktop-'
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Proyectos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Casos reales que reducen tiempo operativo y aumentan la calidad de datos
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-transparent dark:border-gray-700"
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                  <IconComponent className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group-hover:shadow-lg"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver en GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}