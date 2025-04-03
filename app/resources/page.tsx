// app/resources/page.tsx
import { HelpCircle, Book, Heart, Shield, Building2 } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import HumanRightsSection from "@/components/HumanRightsSection";
import MentalHealthSupport from "@/components/MentalHealthSupport";
import UnionDifferences from "@/components/UnionDifferences";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Human Rights Support",
      description:
        "Learn about your rights as a building superintendent or cleaner and how BSCAC can help protect them.",
      icon: <Shield className="h-6 w-6" />,
      link: "#human-rights",
    },
    {
      title: "Mental Health Resources",
      description:
        "Access tools and support for managing stress, preventing burnout, and maintaining your wellbeing.",
      icon: <Heart className="h-6 w-6" />,
      link: "#mental-health",
    },
    {
      title: "Educational Resources",
      description:
        "Professional development materials, training opportunities, and certification information.",
      icon: <Book className="h-6 w-6" />,
      link: "#educational-resources",
    },
    {
      title: "BSCAC & Unions",
      description:
        "Understand how BSCAC complements union memberships and provides additional support.",
      icon: <Building2 className="h-6 w-6" />,
      link: "#unions",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Resources & Support
            </h1>
            <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Helping You Thrive
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Access valuable resources designed to support building
              superintendents and cleaners in their professional and personal
              lives.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Resource Cards */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Available Resources
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                These resources are designed to support building superintendents
                and cleaners in navigating workplace challenges and maintaining
                their wellbeing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                />
              ))}
            </div>
          </section>

          {/* Human Rights Section */}
          <section
            id="human-rights"
            className="pt-10 mt-10 border-t border-gray-200"
          >
            <HumanRightsSection />
          </section>

          {/* Mental Health Section */}
          <section
            id="mental-health"
            className="pt-10 mt-10 border-t border-gray-200"
          >
            <MentalHealthSupport />
          </section>

          {/* Educational Resources Section */}
          <section
            id="educational-resources"
            className="pt-10 mt-10 border-t border-gray-200"
          >
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
                  <span className="bg-secondary text-white p-2 rounded-full mr-4">
                    <Book className="h-6 w-6" />
                  </span>
                  Educational Resources
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    BSCAC is committed to providing quality educational
                    resources and professional development opportunities for
                    building superintendents and cleaners across Canada. Our
                    educational materials and training programs are designed to
                    enhance your skills, increase your knowledge, and advance
                    your career.
                  </p>

                  <div className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Coming Soon
                    </h3>
                    <p className="text-gray-700">
                      We're currently developing comprehensive educational
                      materials. Check back soon for training videos,
                      certification programs, and professional development
                      resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Union Differences Section */}
          <section id="unions" className="pt-10 mt-10 border-t border-gray-200">
            <UnionDifferences />
          </section>
        </div>
      </main>
    </div>
  );
}
