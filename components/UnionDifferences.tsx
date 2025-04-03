// components/UnionDifferences.tsx
import React from "react";
import { Building2 } from "lucide-react";

export default function UnionDifferences() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Building2 className="h-6 w-6" />
          </span>
          Key Differences Between BSCAC and Unions
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary mb-8">
            <p>
              At the Building Superintendents and Cleaners Association of Canada
              (BSCAC), our mission is to provide training, education, and
              professional development to building superintendents and cleaners
              across the country. We recognize the invaluable role that unions
              play in advocating for workers' rights, negotiating fair wages,
              and ensuring safe working conditions. BSCAC, however, is not a
              union, nor are we seeking to compete with any labor organizations.
              Instead, we aim to complement their efforts by offering resources
              that enhance the skills, knowledge, and overall well-being of
              workers in the industry.
            </p>
          </div>

          <h3 className="text-xl font-bold text-primary">
            Why We're Not Competing
          </h3>

          <h4 className="text-lg font-semibold text-primary mt-8">
            1. BSCAC is About Training & Education, Not Bargaining
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Unions (like CUPE) focus on collective bargaining, contract
              negotiations, strikes, and labor disputes to secure better wages,
              benefits, and protections for workers.
            </li>
            <li>
              BSCAC is an educational and training association—we equip
              superintendents and cleaners with the knowledge, skills, and
              resources they need to succeed in their roles. We're not
              negotiating contracts or organizing labor actions.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            2. We Fill a Critical Gap Unions Overlook
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Many superintendents and cleaners feel they're left behind, even
              in unionized environments. BSCAC steps in to provide direct
              support, mental health resources, legal guidance, and professional
              development—things unions often don't focus on.
            </li>
            <li>
              Our mission is empowerment through knowledge, not union
              representation.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            3. We Work with Everyone, Not Just Unionized Workers
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unions only serve their members.</li>
            <li>
              BSCAC supports all superintendents and cleaners, whether they are
              unionized or not, giving equal access to training, resources, and
              a professional community.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            4. BSCAC is a Professional Association, Not a Labor Organization
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Think of us like a trade association, similar to how electricians,
              property managers, and engineers have professional groups that
              support and uplift their industries.
            </li>
            <li>
              We don't replace unions—we complement them by helping workers grow
              in their careers, improve their workplace safety, and connect with
              experts.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-primary mt-6">
            How We Can Work in Harmony with Unions
          </h4>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Enhancing Worker Protections:</strong> Unions fight for
              workers' rights; BSCAC ensures those workers understand their
              rights, legal options, and safety protocols.
            </li>
            <li>
              <strong>Improving Industry Standards:</strong> Unions push for
              better wages; BSCAC ensures superintendents and cleaners are
              better trained, more efficient, and seen as valuable
              professionals.
            </li>
            <li>
              <strong>Providing Non-Adversarial Support:</strong> Some workers
              feel unions can be bureaucratic or slow-moving. BSCAC offers
              immediate, practical guidance without politics.
            </li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-lg mt-8 border-l-4 border-primary">
            <h4 className="text-lg font-bold text-primary">Our Position</h4>
            <p className="mt-2">
              BSCAC isn't competing—it's bridging the gaps that unions don't
              always cover. We see unions as valuable partners in improving the
              lives of building superintendents and cleaners across Canada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
