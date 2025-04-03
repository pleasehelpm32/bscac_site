// components/WhatMakesBSCACGreat.tsx
import React from "react";
import { Award, Gavel, Heart, Users, Globe, Handshake } from "lucide-react";

export default function WhatMakesBSCACGreat() {
  const features = [
    {
      title: "Comprehensive Education & Training",
      icon: <Award className="h-8 w-8" />,
      points: [
        "Access to certification programs that help workers stay informed about best practices in building management, safety protocols, and regulatory compliance.",
        "Hands-on tutorials and training videos from experienced professionals, including pest control, maintenance, and emergency response.",
      ],
    },
    {
      title: "Legal & Human Rights Support",
      icon: <Gavel className="h-8 w-8" />,
      points: [
        "Guidance on workplace rights, fair contracts, and legal protections to ensure workers are not exploited.",
        "A team of professionals offering counsel on employment law, termination rights, and dispute resolution.",
      ],
    },
    {
      title: "Health & Mental Well-Being",
      icon: <Heart className="h-8 w-8" />,
      points: [
        "Support for chemical exposure risks, injury prevention, and workplace safety standards to protect the well-being of workers.",
        "Mental health and harassment support to help those struggling with the demands of their job or dealing with workplace issues.",
      ],
    },
    {
      title: "A Strong Community & Marketplace",
      icon: <Users className="h-8 w-8" />,
      points: [
        "A dedicated network where workers can connect, share knowledge, and help one another.",
        "A marketplace where members can buy, sell, and trade goods and services, making it easier to find affordable resources within the community.",
      ],
    },
    {
      title: "Progressive, Interactive Website",
      icon: <Globe className="h-8 w-8" />,
      points: [
        "An easy-to-navigate platform filled with educational resources, training programs, and essential tools to keep members engaged and informed.",
      ],
    },
    {
      title: '"You\'re Not Alone" – A Commitment to Support',
      icon: <Handshake className="h-8 w-8" />,
      points: [
        "The core mission of BSCAC is to ensure that no cleaner or building superintendent ever feels isolated or helpless in their role.",
        "By uniting workers under one association, we create strength, confidence, and a sense of belonging that has never been offered before on this scale.",
      ],
    },
  ];

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Award className="h-6 w-6" />
          </span>
          What Makes BSCAC Great?
        </h2>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-secondary">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary">
                  {index + 1}. {feature.title}
                </h3>
              </div>
              <ul className="list-disc pl-14 space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 italic">
            BSCAC is not just an organization—it's a movement aimed at
            transforming the lives of those who are often overlooked. It
            provides the tools, knowledge, and support needed to create better
            working conditions, fairer treatment, and a more sustainable future
            for building superintendents and cleaners across Canada.
          </p>
        </div>
      </div>
    </div>
  );
}
