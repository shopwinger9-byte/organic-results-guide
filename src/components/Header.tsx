
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Search className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">SEOYourCompany</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="/#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
            >
              Free Consultation
            </Button>
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Audit
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="/#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
                >
                  Free Consultation
                </Button>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Free Audit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
