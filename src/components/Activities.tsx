import React from "react";
import { Card, CardContent } from "./ui/card";
import { ResponsiveImage } from "./figma/ResponsiveImage";

export function Activities() {
  const activities = [
    {
      title: "Ateliers créatifs",
      description:
        "Peinture, dessin, modelage et bricolage pour développer la motricité fine et l'expression artistique.",
      image: "/assets/activities-creative.jpg",
      bgColor: "#FECACA",
    },
    {
      title: "Découvertes nature",
      description:
        "Jardinage, observation des saisons et activités en plein air pour connecter les enfants à leur environnement.",
      image: "/assets/activities-nature.jpg",
      bgColor: "#A8E6CF",
    },
    {
      title: "Éveil musical",
      description:
        "Chansons, instruments et rythmes pour développer l'écoute, la coordination et l'expression corporelle.",
      image: "/assets/activities-music.jpg",
      bgColor: "#F4F1DE",
    },
  ];

  return (
    <section
      id="activites"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-gray-800 mb-4"
            style={{ fontFamily: "Fredoka, cursive" }}
          >
            Nos Activités
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Des expériences variées et enrichissantes pour
            stimuler tous les sens et talents de votre enfant
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden"
              style={{ backgroundColor: activity.bgColor }}
            >
              <div className="relative">
                <ResponsiveImage
                  baseName={activity.image.replace('/assets/','').replace('.jpg','')}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3
                  className="text-xl mb-3 text-gray-800"
                  style={{ fontFamily: "Fredoka, cursive" }}
                >
                  {activity.title}
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
