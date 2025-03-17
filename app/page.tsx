import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building Superintendent & Cleaners Association of Canada
            </h1>
            <div className="h-1 w-32 bg-yellow-400 mx-auto rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">You're Not Alone</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              BSCAC is a platform for education, training, and
              community-building that benefits workers, businesses, and society.
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navbar />

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
      <main className="flex-1 py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-16">
          {/* About Section */}
          <section className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 flex items-center">
                <span className="bg-blue-100 text-blue-900 p-2 rounded-full mr-4">
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
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Dean John Colford is building a legacy of knowledge,
                collaboration, and success with BSCAC, creating opportunities
                for workers and businesses alike.
              </p>
            </div>
          </section>

          {/* Latest News Section */}
          <section className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 flex items-center">
                <span className="bg-blue-100 text-blue-900 p-2 rounded-full mr-4">
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
              <div className="border-2 border-dashed border-blue-200 bg-blue-50 rounded-lg p-10 text-center">
                <p className="text-lg md:text-xl text-blue-800">
                  Latest News Coming Soon
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Contact Information
              </h3>
              <p className="text-lg text-blue-100">
                Contact details coming soon
              </p>
            </div>
            <div className="text-center md:text-right">
              <Button
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join Us
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-700 text-center text-blue-200 text-lg">
            &copy; {new Date().getFullYear()} Building Superintendent & Cleaners
            Association of Canada
          </div>
        </div>
      </footer>
    </div>
  );
}
