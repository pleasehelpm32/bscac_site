import Navbar from "@/components/Navbar";
import Membership from "@/components/Membership";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-[#4A2C2A] text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              BSCAC Membership
            </h1>
            <div className="h-1 w-32 bg-[#D4A017] mx-auto rounded-full"></div>
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

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto max-w-6xl">
          {/* Membership Section */}
          <Membership />

          {/* Additional Information */}
          <section className="py-16 px-4 md:px-6">
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#4A2C2A] flex items-center">
                  <span className="bg-[#D4A017] text-white p-2 rounded-full mr-4">
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
                <div className="space-y-6 text-lg text-[#1A1A1A] leading-relaxed">
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
                      className="text-lg px-10 py-7 h-auto bg-[#D4A017] hover:bg-[#B78C00] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
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

      {/* Footer */}
      <footer className="bg-[#4A2C2A] text-white py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Contact Information
              </h3>
              <p className="text-lg text-[#D4A017]">
                Contact details coming soon
              </p>
            </div>
            <div className="text-center md:text-right">
              <Button
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-[#D4A017] hover:bg-[#B78C00] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join Us
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#D4A017] text-center text-[#D4A017] text-lg">
            © {new Date().getFullYear()} Building Superintendent & Cleaners
            Association of Canada
          </div>
        </div>
      </footer>
    </div>
  );
}
