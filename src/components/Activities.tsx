import React from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Activities() {
  const activities = [
    {
      title: "Ateliers créatifs",
      description:
        "Peinture, dessin, modelage et bricolage pour développer la motricité fine et l'expression artistique.",
      image:
        "https://images.unsplash.com/photo-1755727764068-7512292ef4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMGFjdGl2aXRpZXMlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NTk2ODM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "#FECACA",
    },
    {
      title: "Découvertes nature",
      description:
        "Jardinage, observation des saisons et activités en plein air pour connecter les enfants à leur environnement.",
      image:
        "https://images.unsplash.com/photo-1581360752623-dddeb81341e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBkaXNjb3ZlcnklMjBraWRzfGVufDF8fHx8MTc1OTY4MzU3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "#A8E6CF",
    },
    {
      title: "Éveil musical",
      description:
        "Chansons, instruments et rythmes pour développer l'écoute, la coordination et l'expression corporelle.",
      image:
        "https://images.unsplash.com/photo-1577877794879-40c77999dc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtdXNpYyUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc1OTY4MzU3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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