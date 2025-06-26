
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Scale Your Business with 
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Expert SEO</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Drive organic traffic, increase conversions, and dominate search rankings with our proven SEO strategies. 
            Get measurable results in 90 days or less.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Get Free SEO Audit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200%+</h3>
              <p className="text-gray-600">Average Traffic Increase</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
