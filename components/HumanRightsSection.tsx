// components/HumanRightsSection.tsx
import React from "react";
import { Shield } from "lucide-react";

export default function HumanRightsSection() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Shield className="h-6 w-6" />
          </span>
          Protecting Human Rights of Building Superintendents & Cleaners
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At the Building Superintendents and Cleaners Association of Canada,
            we are deeply committed to safeguarding the human rights and
            well-being of all building superintendents & Cleaners and their
            families. Recognizing the immense challenges many endure including
            inadequate healthcare, unfair treatment, underpayment for body of
            work, overworked, including insufficient time off, our association
            stands as a beacon of support.
          </p>

          <p>
            Building superintendents often endure mental, physical, and
            emotional stress, and in many instances, this goes unreported due to
            fear of job loss due to one-sided employment contracts.
          </p>

          <p>
            We acknowledge the hard work and dedication required in their roles,
            often going beyond their regular duties to ensure the smooth
            operation of properties and wellbeing of their residents.
          </p>

          <p>
            We strive to ensure that every superintendent is treated with the
            respect and dignity they deserve, advocating for fair working
            conditions and equitable compensation. Our efforts include:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Advocating for Fair Labor Practices:</strong> Pushing for
              reasonable working hours, proper compensation, and adequate time
              off to ensure superintendents have a healthy work-life balance.
            </li>
            <li>
              <strong>Providing Support and Resources:</strong> Offering
              resources and support systems to help superintendents manage the
              physical, mental, and emotional demands of their jobs.
            </li>
            <li>
              <strong>Promoting Awareness:</strong> Raising awareness about the
              vital role superintendents and cleaners play and the challenges
              they face, encouraging property owners and managers to foster a
              respectful and supportive work environment.
            </li>
            <li>
              <strong>Empowering Superintendents:</strong> Empowering them to
              stand up against discrimination and exploitation and ensuring
              their voices are heard in the workplace through proper channels
              and legal support.
            </li>
            <li>
              <strong>Health and Safety Standards:</strong> Enforcing stringent
              health and safety standards to protect superintendents and
              cleaners from harm and ensuring safe working conditions.
            </li>
          </ul>

          <p>
            Through our efforts, we aim to create an industry where building
            superintendents are valued, respected, and supported in their vital
            roles. Every superintendent and cleaner deserves to work in an
            environment that recognizes their contributions and provides the
            necessary support for their well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
