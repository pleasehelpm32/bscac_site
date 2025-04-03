// components/UnderstandingAssociation.tsx
import React from "react";
import { Users } from "lucide-react";

export default function UnderstandingAssociation() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Users className="h-6 w-6" />
          </span>
          Understanding Your Association
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            An association is a group of individuals or organizations united by
            a common purpose or interest. Unlike a business that primarily seeks
            profit, an association's mission is often focused on providing
            support, advocacy, or resources to its members or a specific
            community. Associations are typically member-driven, with a
            structure that includes bylaws, boards, and committees to guide
            their activities. Their primary goal is to address the needs of
            their members or stakeholders, creating value through education,
            training, certification, networking, and other services.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8">
            Differences Between an Association, a Charity, and a Business
          </h3>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="text-lg font-bold text-primary">1. Association</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Purpose:</strong> Focuses on shared goals and
                  providing much-needed support to its members or a target
                  group.
                </li>
                <li>
                  <strong>Operations:</strong> Often relies on member
                  contributions, fees, and fundraising to operate. It is
                  designed to offer services such as training, certification,
                  and advocacy.
                </li>
                <li>
                  <strong>Key Value:</strong> Offers practical and professional
                  development opportunities, often supporting human rights and
                  fostering a sense of community.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
              <h4 className="text-lg font-bold text-primary">2. Charity</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Purpose:</strong> Aims to address societal issues such
                  as poverty, education, or health. Charities operate primarily
                  for the benefit of the public rather than a specific group of
                  members.
                </li>
                <li>
                  <strong>Operations:</strong> Often funded by donations,
                  grants, and fundraising efforts, with a focus on providing
                  free or low-cost services to those in need.
                </li>
                <li>
                  <strong>Key Value:</strong> Emphasizes altruism and
                  philanthropy, often targeting vulnerable populations.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
              <h4 className="text-lg font-bold text-primary">3. Business</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Purpose:</strong> Seeks to generate profit for its
                  owners or shareholders by selling goods or services.
                </li>
                <li>
                  <strong>Operations:</strong> Operates in a competitive market,
                  typically prioritizing efficiency, innovation, and customer
                  satisfaction.
                </li>
                <li>
                  <strong>Key Value:</strong> Focuses on financial growth,
                  market presence, and customer loyalty.
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8">
            Why Choose Our Association
          </h3>
          <p>
            Our association stands apart because it is tailored to provide
            much-needed support to its members, emphasizing human rights,
            professional training, and certification. Unlike charities, which
            may offer broad assistance to the public, or businesses, which
            prioritize profit, our association focuses on empowering individuals
            within our community through specialized programs and resources. We
            are committed to:
          </p>

          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>
              <strong>Advocating for Human Rights:</strong> Ensuring that every
              association member's voice is heard and respected.
            </li>
            <li>
              <strong>Delivering High-Quality Training:</strong> Providing
              certifications and skills that enable personal and professional
              growth.
            </li>
            <li>
              <strong>Creating a Supportive Network:</strong> Offering a
              collaborative environment where members can connect, learn, and
              thrive.
            </li>
          </ul>

          <p className="mt-6">
            By joining our association, members gain access to an extensive
            range of resources and opportunities tailored to enhance their
            personal and professional growth. From cutting-edge training
            programs that keep members informed about the latest industry
            standards and technological advancements to workshops focused on
            contract negotiations, human rights advocacy, race relations, and
            workplace health and safety, our association is committed to
            providing comprehensive support.
          </p>

          <p>
            We also emphasize the importance of work-life balance through
            initiatives that address physical, mental, emotional, and financial
            well-being. This includes guidance on financial planning, access to
            WSIB resources, and vacation planning. Your Association is more than
            just a service provider, we foster a vibrant community where members
            feel valued and empowered, creating a lasting impact that extends
            beyond the workplace and into their daily lives. Together, we work
            to build a stronger, more supportive industry.
          </p>
        </div>
      </div>
    </div>
  );
}
