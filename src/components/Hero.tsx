
import { Button } from './ui/button';
import { ResponsiveImage } from './figma/ResponsiveImage';

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
              asChild
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="#ecole">Découvrir notre école</a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ResponsiveImage
                baseName="hero"
                alt="Enfants jouant dans la nature"
                className="w-full h-96 lg:h-[500px] object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
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
