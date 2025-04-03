// components/Navbar.tsx
"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Function to check if the current path matches the link
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Function to handle link clicks in mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Membership", path: "/membership" },
    { name: "Resources & Support", path: "/resources" },
    { name: "Community", path: "/community" },
    { name: "Contact & Help", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-border py-4 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/" className="text-primary font-bold text-xl">
            BSCAC
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-xl font-medium py-3 px-4 rounded ${
                      isActive(link.path)
                        ? "bg-secondary text-white"
                        : "text-primary hover:bg-secondary hover:text-white"
                    } transition-colors`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-6 lg:space-x-10">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg font-medium py-2 px-4 ${
                isActive(link.path)
                  ? "text-primary border-b-2 border-secondary"
                  : "text-primary hover:text-primary hover:border-secondary border-b-2 border-transparent"
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
