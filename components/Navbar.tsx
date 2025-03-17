import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-blue-900 font-bold text-lg">BSCAC</div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-xl font-medium py-3 px-4 rounded text-blue-900 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/resources"
                  className="text-xl font-medium py-3 px-4 rounded text-blue-900 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Resources & Support
                </Link>
                <Link
                  href="/membership"
                  className="text-xl font-medium py-3 px-4 rounded text-blue-900 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Membership
                </Link>
                <Link
                  href="/contact"
                  className="text-xl font-medium py-3 px-4 rounded text-blue-900 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Contact & Help
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-10">
          <Link
            href="/"
            className="text-xl font-medium py-2 px-4 text-blue-900 border-b-2 border-blue-900"
          >
            Home
          </Link>
          <Link
            href="/resources"
            className="text-xl font-medium py-2 px-4 text-gray-700 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-colors"
          >
            Resources & Support
          </Link>
          <Link
            href="/membership"
            className="text-xl font-medium py-2 px-4 text-gray-700 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-colors"
          >
            Membership
          </Link>
          <Link
            href="/contact"
            className="text-xl font-medium py-2 px-4 text-gray-700 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-colors"
          >
            Contact & Help
          </Link>
        </div>
      </div>
    </nav>
  );
}
