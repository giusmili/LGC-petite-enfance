import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Infos() {
  return (
    <section id="infos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4" style={{ fontFamily: 'Fredoka, cursive' }}>
            Infos pratiques
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Coordonnées, horaires et informations d’accès
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-green-500" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Fredoka, cursive' }}>Adresse</h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    12 rue des Écoles<br />75000 Paris
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="text-green-500" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Fredoka, cursive' }}>Horaires</h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Lun–Ven: 8h30–18h30<br />Fermé le week‑end
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-green-500" />
                    <a href="tel:+33123456789" className="text-gray-700 hover:text-green-600" style={{ fontFamily: 'Nunito, sans-serif' }}>01 23 45 67 89</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-green-500" />
                    <a href="mailto:contact@lagrandeclasse.fr" className="text-gray-700 hover:text-green-600" style={{ fontFamily: 'Nunito, sans-serif' }}>contact@lagrandeclasse.fr</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

