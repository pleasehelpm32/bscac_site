// components/AssociationExplanation.tsx
import React from "react";
import { Lightbulb } from "lucide-react";

export default function AssociationExplanation() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Lightbulb className="h-6 w-6" />
          </span>
          The Plight of Building Superintendents and Cleaners
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <h3 className="text-xl font-bold text-primary">
            Why the Association Matters
          </h3>

          <p>
            The establishment of the Building Superintendents and Cleaners
            Association of Canada is not just a step forward; it is an urgent
            and necessary response to decades of neglect, exploitation, and
            systemic failure. This association is dedicated to acknowledging and
            addressing the struggles faced by those who have paved the way,
            those currently serving in the field, and the generations to come.
          </p>

          <p>
            Building Superintendents and Cleaners are often the unseen backbone
            of residential and commercial buildings. Despite their vital roles,
            many endure unimaginable challenges daily. Some suffer severe health
            issues like emphysema and asthma caused by chemical inhalation, yet
            they persist, carrying oxygen canisters just to breathe while
            working. Others are victims of on-the-job trauma, facing assault,
            abuse, and relentless overwork without reprieve.
          </p>

          <p>
            Exploitation is rampant. Countless workers have been manipulated
            into working endless hours without fair compensation. Language
            barriers further isolate those who cannot advocate for themselves,
            leaving them vulnerable to unsafe conditions and unjust treatment.
            There are workers who risk their lives every day because they have
            nowhere else to turn, enduring hardships with no viable
            alternatives. Their plight is one of humanity, health, and justice.
          </p>

          <p>
            This association stands for more than just advocacy; it represents a
            movement to restore dignity, ensure fair treatment, and establish
            critical protections. It is about human rights, race relations,
            workers' compensation, and the health and safety of every individual
            in the field. It is also about education and empowerment—offering
            resources, training, and legal support to ensure no one stands alone
            in their fight for basic human rights.
          </p>

          <p>
            While steps have been taken—such as drafting a comprehensive manual
            and organizing trades to provide training and tutorials—the work
            ahead demands robust legal support. This foundation is critical to
            withstand the inevitable pushback from organizations that profit
            from exploitation and resist change.
          </p>

          <p>
            Let it be known: this association is a voice for the voiceless, a
            shield for the vulnerable, and a platform for progress. Together, we
            will honor the sacrifices of the past, support those in the present,
            and build a better future for those who follow.
          </p>
        </div>
      </div>
    </div>
  );
}
