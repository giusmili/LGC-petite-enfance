import React from 'react';
import { Heart, Eye, Palette } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Un environnement sécurisant et respectueux où chaque enfant se sent valorisé et écouté.',
      color: 'from-pink-200 to-pink-300'
    },
    {
      icon: Eye,
      title: 'Curiosité',
      description: 'Éveiller et nourrir la soif naturelle d\'apprendre à travers l\'exploration et la découverte.',
      color: 'from-blue-200 to-blue-300'
    },
    {
      icon: Palette,
      title: 'Créativité',
      description: 'Développer l\'imagination et l\'expression artistique par des activités variées et stimulantes.',
      color: 'from-yellow-200 to-yellow-300'
    }
  ];

  return (
    <section id="ecole" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C7F9CC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl text-gray-800 mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Nos Valeurs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Des principes fondamentaux qui guident notre approche pédagogique au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <IconComponent size={32} className="text-gray-700" />
                </div>
                <h3 
                  className="text-xl mb-4 text-gray-800"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
