// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AssociationExplanation from "@/components/AssociationExplanation";
import WhatMakesBSCACGreat from "@/components/WhatMakesBSCACGreat";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building Superintendent & Cleaners Association of Canada (BSCAC)
            </h1>
            <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
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
          {/* What Makes BSCAC Great Section */}
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  What Makes BSCAC Great
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-accent leading-relaxed">
                  <p>
                    The Building Superintendents and Cleaners Association of
                    Canada (BSCAC) is a one-of-a-kind organization because it
                    goes beyond just offering a support network—it provides
                    education, training, legal assistance, mental health
                    support, and community-building opportunities tailored
                    specifically for building superintendents and cleaners.
                  </p>
                  <div className="flex justify-center mt-8">
                    <Link href="/membership">
                      <Button className="text-lg px-8 py-6 h-auto bg-secondary hover:bg-secondary/80 text-white font-bold">
                        Join Our Community
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Features Section */}
          <section className="py-8 px-4 md:px-6">
            <WhatMakesBSCACGreat />
          </section>

          {/* The Plight of Building Superintendents and Cleaners */}
          <section className="py-16 px-4 md:px-6">
            <AssociationExplanation />
          </section>

          {/* Latest News Section */}
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
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </span>
                  Latest News
                </h2>
                <div className="border-2 border-dashed border-secondary bg-secondary-foreground rounded-lg p-10 text-center">
                  <p className="text-lg md:text-xl text-primary">
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
