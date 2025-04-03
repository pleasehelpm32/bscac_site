// components/MembershipContributions.tsx
import React from "react";
import {
  DollarSign,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Building,
  Search,
  BookOpen,
} from "lucide-react";

export default function MembershipContributions() {
  const contributionAreas = [
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Lawyer Consult and Contract Review",
      description:
        "Membership fees help provide access to legal consultations and contract review services. This ensures that members have the necessary legal guidance to navigate complex property management issues.",
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Training",
      description:
        "Contributions fund various training programs and workshops designed to enhance the skills and knowledge of building superintendents and cleaners. This includes technical training, soft skills development, and certification programs.",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Field Support",
      description:
        "Membership fees support field visits by experts who provide on-site assistance and guidance to superintendents. This can include troubleshooting, assessments, and hands-on support.",
    },
    {
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Mental Health Resources",
      description:
        "Contributions are used to offer mental health resources and support services, such as counseling, workshops on stress management, and wellness programs. This ensures that both superintendents and cleaners have the support they need for their mental and emotional well-being.",
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "Site Visits",
      description:
        "Membership fees cover the costs of regular site visits and inspections by association representatives. These visits help ensure that properties are maintained to high standards and provide an opportunity for superintendents to receive feedback and support.",
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Job Opportunities",
      description:
        "Contributions help maintain a network of job opportunities, connecting superintendents and cleaners with potential employers. This includes job listings, career fairs, and networking events.",
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Up-to-Date Industry Information",
      description:
        "Membership fees support the dissemination of the latest industry information, trends, and best practices. This includes newsletters, webinars, and access to a repository of resources.",
    },
  ];

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <DollarSign className="h-6 w-6" />
          </span>
          Allocation of Membership Contributions
        </h2>

        <div className="space-y-10 mt-10">
          {contributionAreas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-primary/10 p-4 rounded-full text-primary flex-shrink-0">
                {area.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-secondary/10 rounded-lg border border-secondary/20">
          <p className="text-lg text-gray-700">
            By allocating membership contributions to these areas, the
            association ensures that building superintendents have access to the
            support, resources, and training necessary for their professional
            growth and well-being. This comprehensive approach promotes
            excellence in property management and enhances the overall quality
            of services provided to residents and property owners.
          </p>
        </div>
      </div>
    </div>
  );
}
