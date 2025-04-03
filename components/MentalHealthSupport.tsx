// components/MentalHealthSupport.tsx
import React from "react";
import { Heart } from "lucide-react";

export default function MentalHealthSupport() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Heart className="h-6 w-6" />
          </span>
          Mental Health Programs and Services
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <h3 className="text-xl font-bold text-primary">
            Mental Health Support for Building Superintendents
          </h3>

          <p>
            Working as a building superintendent can be both demanding and
            stressful, often leading to physical, mental, and emotional strain.
            Here are several ways we support the mental health and well-being of
            building superintendents:
          </p>

          <h4 className="text-lg font-semibold text-primary mt-8">
            Recognizing the Signs of Stress and Burnout
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Awareness:</strong> We encourage superintendents to be
              aware of the signs of stress and burnout, such as fatigue,
              irritability, anxiety, and lack of motivation.
            </li>
            <li>
              <strong>Open Communication:</strong> We foster an environment
              where superintendents feel comfortable discussing their mental
              health concerns without fear of stigma or job loss.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            Providing Access to Important Mental Health Resources
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Employee Assistance Programs (EAPs):</strong> We offer
              EAPs that provide confidential counseling services, mental health
              support, and resources for managing stress.
            </li>
            <li>
              <strong>Mental Health Hotlines:</strong> We provide information
              about mental health hotlines and support groups that
              superintendents can contact when they need immediate assistance.
            </li>
            <li>
              <strong>Workshops and Training:</strong> We conduct workshops and
              training sessions focused on stress management, resilience
              building, and mental health awareness.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            Promoting Work-Life Balance
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Reasonable Work Hours:</strong> We advocate for reasonable
              work hours and help ensure superintendents are not overburdened
              with excessive tasks.
            </li>
            <li>
              <strong>Time Off:</strong> We encourage taking regular breaks and
              time off to rest and recharge, recognizing the importance of
              vacation and personal time.
            </li>
            <li>
              <strong>Flexible Scheduling:</strong> Where possible, we support
              flexible scheduling options to accommodate personal and family
              needs.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            Creating a Supportive Community
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Peer Support:</strong> We have established peer support
              networks where superintendents can share experiences and provide
              mutual support.
            </li>
            <li>
              <strong>Regular Check-Ins:</strong> We encourage regular check-ins
              to discuss workload, challenges, and well-being.
            </li>
            <li>
              <strong>Recognition and Appreciation:</strong> We show
              appreciation for the hard work and dedication of superintendents
              through recognition programs and positive reinforcement.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            Advocacy and Policy Changes
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Fair Compensation:</strong> We advocate for fair
              compensation and benefits that reflect the responsibilities and
              challenges of the role.
            </li>
            <li>
              <strong>Workplace Policies:</strong> We develop and enforce
              workplace policies that prioritize mental health, prevent
              overwork, and address any form of abuse or exploitation.
            </li>
            <li>
              <strong>Mental Health Initiatives:</strong> We launch mental
              health initiatives within the organization to promote overall
              well-being and reduce stigma around mental health issues.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            Encouraging Self-Care Practices
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Physical Health:</strong> We encourage regular physical
              activity, healthy eating, and sufficient sleep to support overall
              well-being.
            </li>
            <li>
              <strong>Mindfulness and Relaxation:</strong> We promote
              mindfulness practices, such as meditation and deep breathing
              exercises, to reduce stress and improve mental clarity.
            </li>
            <li>
              <strong>Hobbies and Interests:</strong> We support superintendents
              in pursuing hobbies and interests outside of work to maintain a
              balanced lifestyle.
            </li>
          </ul>

          <p className="mt-8">
            By providing comprehensive mental health support, creating a
            supportive environment, and advocating for fair working conditions,
            we ensure that building superintendents have the necessary resources
            and support to maintain their mental health and overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
