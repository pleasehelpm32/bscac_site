import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#4A2C2A] text-white py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Contact Information
            </h3>
            <p className="text-lg text-[#D4A017]">
              Contact details coming soon
            </p>
          </div>
          <div className="text-center md:text-right">
            <Button
              size="lg"
              className="text-lg px-10 py-7 h-auto bg-[#D4A017] hover:bg-[#B78C00] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Join Us
            </Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#D4A017] text-center text-[#D4A017] text-lg">
          © {new Date().getFullYear()} Building Superintendent & Cleaners
          Association of Canada
        </div>
      </div>
    </footer>
  );
}
