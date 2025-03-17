import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Membership() {
  const premiumBenefits = [
    "Legal Backing & Advocacy",
    "Mental Health Support & Resources",
    "Exclusive Training & Certification",
    "Community Forum Access",
    "Job Board & Marketplace Access",
    "Food Bank & Charitable Support",
    "Industry Networking Opportunities",
  ];

  const standardBenefits = [
    "Basic Resources Access",
    "Limited Forum Access",
    "Public Training Videos",
    "General Support",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A2C2A] mb-4">
            Join Our Community
          </h2>
          <div className="h-1.5 w-32 bg-[#D4A017] mx-auto rounded-full mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Become a member of BSCAC and gain access to resources, support, and
            a community that understands your challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Membership Card */}
          <Card className="border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-[#4A2C2A]">
                Standard Membership
              </CardTitle>
              <CardDescription className="text-gray-600">
                Essential support for industry workers
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#4A2C2A]">Free</span>
              </div>
              <ul className="space-y-3 mb-8">
                {standardBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full py-6 bg-gray-100 hover:bg-gray-200 text-[#4A2C2A] font-semibold text-lg border border-gray-300">
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Membership Card */}
          <Card className="border-2 border-[#D4A017] shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 right-4">
              <Badge className="bg-[#4A2C2A] text-white px-4 py-1 text-sm font-medium">
                Recommended
              </Badge>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-[#4A2C2A]">
                Premium Membership
              </CardTitle>
              <CardDescription className="text-gray-600">
                Full support and exclusive benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#4A2C2A]">
                  Coming Soon
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {premiumBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4A017] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full py-6 bg-[#D4A017] hover:bg-[#B78C00] text-white font-semibold text-lg">
                Join Premium
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#4A2C2A] mb-4">
            You're Not Alone
          </h3>
          <p className="text-gray-700 text-lg mb-8">
            BSCAC is more than an organization—it's a movement dedicated to
            improving working conditions and creating a fair playing field for
            building superintendents and cleaners across Canada.
          </p>
          <Button
            size="lg"
            className="px-8 py-6 h-auto bg-[#4A2C2A] hover:bg-[#3A1C1A] text-white font-bold text-lg"
          >
            Learn More About Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}
