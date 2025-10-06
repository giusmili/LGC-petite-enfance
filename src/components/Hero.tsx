
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FDFCDC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight"
                         >
              Grandir, apprendre et s'épanouir dans un environnement bienveillant
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Notre école offre un cadre chaleureux et stimulant où chaque enfant peut développer sa curiosité naturelle 
              et ses talents uniques à travers des activités ludiques et éducatives.
            </p>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Découvrir notre école
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628099568673-ecbc6698fef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBvdXRkb29ycyUyMG5hdHVyZXxlbnwxfHx8fDE3NTk2MzM3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Enfants jouant dans la nature"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full-large opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full-large opacity-50"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-pink-200 rounded-full-large opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}