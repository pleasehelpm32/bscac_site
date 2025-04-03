// components/StoriesOfCourageSection.tsx
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StoriesOfCourageSection() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center">
          <span className="bg-secondary text-white p-2 rounded-full mr-4">
            <Star className="h-6 w-6" />
          </span>
          Stories of Courage, Strength, and Resilience
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At BSCAC, we believe in celebrating the extraordinary individuals
            who make up our community. Every building superintendent and cleaner
            has a unique story to tell — stories of overcoming challenges,
            showing remarkable courage, and demonstrating incredible resilience.
          </p>

          <p>
            Through our "Stories of Courage, Strength, and Resilience" series,
            we aim to highlight these inspiring journeys. By sharing these
            personal accounts, we not only honor the individuals featured but
            also inspire others who may be facing similar challenges.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8">
            Do You Have a Story to Share?
          </h3>
          <p>
            We're looking for stories from our community members who have
            demonstrated courage, strength, and resilience in their personal or
            professional lives. Whether you've overcome workplace challenges,
            health issues, or personal hardships, your story could inspire and
            encourage others.
          </p>

          <p>
            With your written permission, we'll create a personal piece about
            your journey that celebrates your strength and determination. These
            stories will be featured on our website and shared with our
            community.
          </p>

          <div className="mt-8 flex justify-center">
            <Link href="/stories/submit">
              <Button className="text-lg px-8 py-6 h-auto bg-secondary hover:bg-secondary/80 text-white font-bold">
                Share Your Story
              </Button>
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8 border-l-4 border-primary">
            <h4 className="text-lg font-bold text-primary">
              Why Share Your Story?
            </h4>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Inspire others facing similar challenges</li>
              <li>
                Build a stronger sense of community among building
                superintendents and cleaners
              </li>
              <li>Help change perceptions about the profession</li>
              <li>Celebrate your own journey and achievements</li>
              <li>
                Contribute to a more supportive and understanding industry
              </li>
            </ul>
          </div>

          <p className="mt-8 italic text-center font-medium text-primary">
            "Every story of courage adds to the collective strength of our
            community."
          </p>
        </div>
      </div>
    </div>
  );
}
