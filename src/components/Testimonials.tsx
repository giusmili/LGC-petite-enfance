import React from 'react';
import { Card, CardContent } from './ui/card';
import { ResponsiveImage } from './figma/ResponsiveImage';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Maman de Lucas, 4 ans',
      quote: 'Lucas s\'épanouit chaque jour à La Grande Classe. L\'équipe bienveillante et les activités variées ont développé sa confiance en lui.',
      image: '/assets/testimonial-1.jpg'
    },
    {
      name: 'Pierre Martin',
      role: 'Papa d\'Emma, 3 ans',
      quote: 'Une école exceptionnelle ! Emma adore ses journées et rentre toujours avec de nouvelles découvertes. Les éducatrices sont formidables.',
      image: '/assets/testimonial-2.jpg'
    },
    {
      name: 'Sophie Leroy',
      role: 'Maman de Théo, 5 ans',
      quote: 'Théo a développé une belle autonomie et une curiosité incroyable. L\'approche pédagogique respecte vraiment le rythme de chaque enfant.',
      image: '/assets/testimonial-3.jpg'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F4F1DE' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl text-gray-800 mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Témoignages des Parents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Découvrez ce que disent les familles qui nous font confiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  
                  <Quote size={32} className="text-green-400" />
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <ResponsiveImage
                      baseName={testimonial.image.replace('/assets/','').replace('.jpg','')}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-800" style={{ fontFamily: 'Fredoka, cursive' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
