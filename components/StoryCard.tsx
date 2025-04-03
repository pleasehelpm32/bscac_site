// components/StoryCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  title: string;
  quote: string;
  summary: string;
  image?: string;
  author: string;
  slug?: string;
}

export default function StoryCard({
  title,
  quote,
  summary,
  image = "/api/placeholder/400/300",
  author,
  slug,
}: StoryCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-gray-500 italic">"{quote}"</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{summary}</p>
        <p className="mt-4 text-gray-600 font-medium">- {author}</p>
      </CardContent>
      {slug && (
        <CardFooter className="pt-0">
          <Link href={`/stories/${slug}`} className="w-full">
            <Button variant="outline" className="w-full">
              Read Full Story
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
