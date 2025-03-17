"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";
export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Support request submitted", {
      description: "We'll get back to you as soon as possible.",
    });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-[#4A2C2A] text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Contact & Help
            </h1>
            <div className="h-1 w-32 bg-[#D4A017] mx-auto rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              We're Here For You
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Need assistance or have questions? Our team is ready to help you
              with any concerns.
            </p>
          </div>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Urgent Contact Options */}
            <div className="md:col-span-1 space-y-6">
              <Card className="border-[#D4A017]">
                <CardHeader className="bg-[#4A2C2A] text-white rounded-t-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-6 w-6 text-[#D4A017]" />
                    <CardTitle>Urgent Help</CardTitle>
                  </div>
                  <CardDescription className="text-gray-200">
                    For immediate workplace issues
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-[#4A2C2A] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#4A2C2A]">
                        Emergency Hotline
                      </h3>
                      <p className="text-gray-600">(Coming Soon)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-[#4A2C2A] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#4A2C2A]">
                        Urgent Email
                      </h3>
                      <p className="text-gray-600">urgent@bscac.ca</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-[#4A2C2A] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#4A2C2A]">
                        Response Time
                      </h3>
                      <p className="text-gray-600">
                        We aim to respond to all urgent requests within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t p-4 rounded-b-lg">
                  <p className="text-sm text-gray-500">
                    For life-threatening emergencies, please call 911
                  </p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#4A2C2A]">
                    General Contact
                  </CardTitle>
                  <CardDescription>For non-urgent inquiries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-[#4A2C2A] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#4A2C2A]">Email</h3>
                      <p className="text-gray-600">info@bscac.ca</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-[#4A2C2A] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#4A2C2A]">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday to Friday: 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Support Request Form */}
            <div className="md:col-span-2">
              <Card className="shadow-lg">
                <CardHeader className="border-b">
                  <CardTitle className="text-2xl text-[#4A2C2A]">
                    Support Request Form
                  </CardTitle>
                  <CardDescription>
                    Fill out this form and our team will get back to you as soon
                    as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {formSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="bg-green-100 text-green-800 p-4 rounded-lg inline-block mx-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#4A2C2A]">
                        Request Submitted
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. Our team will review your
                        request and get back to you shortly.
                      </p>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 bg-[#4A2C2A] hover:bg-[#3A1C1A] text-white"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input id="phone" placeholder="Your phone number" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Request Type</Label>
                        <RadioGroup
                          defaultValue="support"
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="support"
                              id="support"
                              className="text-[#4A2C2A] border-[#4A2C2A] data-[state=checked]:bg-[#4A2C2A] data-[state=checked]:border-[#4A2C2A]"
                            />
                            <Label htmlFor="support" className="font-normal">
                              General Support
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="legal"
                              id="legal"
                              className="text-[#4A2C2A] border-[#4A2C2A] data-[state=checked]:bg-[#4A2C2A] data-[state=checked]:border-[#4A2C2A]"
                            />
                            <Label htmlFor="legal" className="font-normal">
                              Legal Assistance
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="training"
                              id="training"
                              className="text-[#4A2C2A] border-[#4A2C2A] data-[state=checked]:bg-[#4A2C2A] data-[state=checked]:border-[#4A2C2A]"
                            />
                            <Label htmlFor="training" className="font-normal">
                              Training & Education
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="other"
                              id="other"
                              className="text-[#4A2C2A] border-[#4A2C2A] data-[state=checked]:bg-[#4A2C2A] data-[state=checked]:border-[#4A2C2A]"
                            />
                            <Label htmlFor="other" className="font-normal">
                              Other
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your issue or question in detail"
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          className="bg-[#D4A017] hover:bg-[#B78C00] text-white px-8 py-6 h-auto text-lg font-semibold"
                        >
                          Submit Request
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section (Optional) */}
          <section className="mt-16">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Frequently Asked Questions
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-center text-lg text-gray-600">
                FAQ section coming soon
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
