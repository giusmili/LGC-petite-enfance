import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-lg">LG</span>
              </div>
              <div>
                <h3 className="text-lg text-white" style={{ fontFamily: 'Fredoka, cursive' }}>
                  La Grande Classe
                </h3>
                <p className="text-sm text-gray-300">Petite Enfance</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Une école dédiée à l'épanouissement des tout-petits dans un environnement bienveillant, 
              créatif et respectueux du rythme de chaque enfant.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 text-white" style={{ fontFamily: 'Fredoka, cursive' }}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-400" />
                <div className="text-sm text-gray-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <p>123 Rue des Enfants</p>
                  <p>75015 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <p className="text-sm text-gray-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  +33 1 23 45 67 89
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <p className="text-sm text-gray-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  contact@lagrandeclasse.fr
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-white" style={{ fontFamily: 'Fredoka, cursive' }}>
              Liens Utiles
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Accueil
                </a>
              </li>
              <li>
                <a href="#ecole" className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Notre École
                </a>
              </li>
              <li>
                <a href="#activites" className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Activités
                </a>
              </li>
              <li>
                <a href="#infos" className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Infos Pratiques
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400" style={{ fontFamily: 'Nunito, sans-serif' }}>
            © 2025 La Grande Classe Petite Enfance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}