// app/stories/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StoryCard from "@/components/StoryCard";
import StoriesOfCourageSection from "@/components/StoriesOfCourageSection";

export default function StoriesPage() {
  // Example stories - in a real app, these would come from a database
  const sampleStories = [
    {
      title: "Rising Above Adversity",
      quote: "I never thought I'd find my voice after years of mistreatment.",
      summary:
        "After 15 years as a building superintendent facing unsafe conditions and unfair treatment, John found support through BSCAC and transformed his workplace environment.",
      author: "John D.",
      slug: "rising-above-adversity",
    },
    {
      title: "Finding Community Support",
      quote: "For the first time, I realized I wasn't alone in my struggles.",
      summary:
        "Maria struggled with work-related health issues for years until connecting with other superintendents through BSCAC who helped her access proper care and support.",
      author: "Maria S.",
      slug: "finding-community-support",
    },
    {
      title: "Coming Soon",
      quote: "",
      summary:
        "We're collecting more inspiring stories from our community. Check back soon for new additions or share your own story today.",
      author: "",
      slug: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Stories of Courage
            </h1>
            <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Celebrating Our Community
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Inspiring stories of strength, resilience, and courage from
              building superintendents and cleaners across Canada.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* About this series */}
          <section className="mb-16">
            <StoriesOfCourageSection />
          </section>

          {/* Featured Stories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Featured Stories
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Real stories from real people in our community who have
                demonstrated remarkable courage, strength, and resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleStories.map((story, index) => (
                <StoryCard
                  key={index}
                  title={story.title}
                  quote={story.quote}
                  summary={story.summary}
                  author={story.author}
                  slug={story.slug}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
