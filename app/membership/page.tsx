import Navbar from "@/components/Navbar";
import Membership from "@/components/Membership";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              BSCAC Membership
            </h1>
            <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Become part of a network dedicated to supporting building
              superintendents and cleaners across Canada.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto max-w-6xl">
          {/* Membership Section */}
          <Membership />

          {/* Additional Information */}
          <section className="py-16 px-4 md:px-6">
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
                  <span className="bg-secondary text-white p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Why Join BSCAC?
                </h2>
                <div className="space-y-6 text-lg text-accent leading-relaxed">
                  <p>
                    Joining BSCAC connects you to a groundbreaking movement
                    dedicated to redefining the building superintendent and
                    cleaner industry in Canada. Our members gain access to
                    valuable resources, support networks, and educational
                    opportunities designed specifically for professionals in
                    this field.
                  </p>
                  <p>
                    By becoming a member, you'll be part of an organization that
                    advocates for fair treatment, improved working conditions,
                    and professional development. You'll never have to face
                    workplace challenges alone again.
                  </p>
                  <p>
                    BSCAC is not just about industry advocacy—it's about direct
                    action. From legal backing to mental health resources, our
                    goal is to provide comprehensive support to all our members
                    while elevating the standards of the industry as a whole.
                  </p>

                  <div className="pt-6">
                    <Button
                      size="lg"
                      className="text-lg px-10 py-7 h-auto bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Sign Up Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
