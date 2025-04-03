// components/ContentSection.tsx
import React, { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
  titleClassName?: string;
}

export default function ContentSection({
  title,
  children,
  icon,
  bgColor = "bg-white",
  textColor = "text-foreground",
  className = "",
  titleClassName = "",
}: ContentSectionProps) {
  return (
    <section
      className={`py-16 px-4 md:px-6 ${bgColor} ${textColor} ${className}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center ${titleClassName}`}
            >
              {icon && (
                <span className="bg-secondary text-white p-2 rounded-full mr-4 flex-shrink-0">
                  {icon}
                </span>
              )}
              {title}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
