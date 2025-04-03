// components/ResourceCard.tsx
import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
  linkText?: string;
  className?: string;
}

export default function ResourceCard({
  title,
  description,
  icon,
  link,
  linkText = "Learn More",
  className = "",
}: ResourceCardProps) {
  return (
    <Card
      className={`shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-secondary p-2 rounded-full text-white">{icon}</div>
          <CardTitle className="text-primary text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {link && (
          <div className="mt-4">
            <Link href={link}>
              <Button variant="outline" className="w-full">
                {linkText}
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
