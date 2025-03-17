import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-[#4A2C2A] text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building Superintendent & Cleaners Association of Canada (BSCAC)
            </h1>
            <div className="h-1 w-32 bg-[#D4A017] mx-auto rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">You're Not Alone</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              BSCAC is a platform for education, training, and
              community-building that benefits workers, businesses, and society.
            </p>
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <div className="flex justify-center items-center py-8 bg-white">
        <div className="w-full max-w-3xl px-4">
          <Image
            src="/bscac_logo.jpg"
            alt="BSCAC Logo"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto max-w-6xl">
          {/* About Section */}
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  About BSCAC
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-[#1A1A1A] leading-relaxed">
                  <p>
                    The Building Superintendents and Cleaners Association of
                    Canada (BSCAC) is a groundbreaking movement founded by Dean
                    John Colford to redefine the building superintendent and
                    cleaner industry. More than just an organization, BSCAC is
                    dedicated to saving lives, improving working conditions, and
                    creating a fair playing field for those who have been
                    overlooked. Our motto, "You're Not Alone," is a promise of
                    advocacy, support, and meaningful change for workers across
                    Canada.
                  </p>
                  <p>
                    BSCAC is pioneering a revolution with a dynamic digital
                    platform as its foundation. Our core focus includes direct
                    action through food bank support, legal backing, mental
                    health resources, and industry elevation. We are building a
                    legacy of collaboration between workers, property managers,
                    and owners, equipping members with certifications and skills
                    to thrive. This is a collaborative journey—join us in
                    shaping a brighter future for the industry, one step at a
                    time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest News Section */}
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
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </span>
                  Latest News
                </h2>
                <div className="border-2 border-dashed border-[#D4A017] bg-[#FFF8E1] rounded-lg p-10 text-center">
                  <p className="text-lg md:text-xl text-[#4A2C2A]">
                    Latest News Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
