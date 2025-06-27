
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnPageSEO = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                On-Page SEO Optimization
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Optimize every element of your web pages to maximize search visibility 
                and user engagement. Our proven on-page strategies drive results.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Page Analysis
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive On-Page Optimization
                </h2>
                <p className="text-gray-700 mb-6">
                  Our on-page SEO service covers every aspect of your web pages, from title tags 
                  and meta descriptions to content structure and internal linking. We optimize 
                  for both search engines and user experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Title Tag Optimization</h4>
                      <p className="text-gray-600">Compelling titles that rank and drive clicks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Content Optimization</h4>
                      <p className="text-gray-600">Strategic keyword placement and content structure</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Internal Linking</h4>
                      <p className="text-gray-600">Strategic link structure to boost page authority</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Optimize</h3>
                <div className="space-y-3">
                  {[
                    "Title Tags & Meta Descriptions",
                    "Header Tags (H1, H2, H3)",
                    "URL Structure",
                    "Image Alt Text",
                    "Content Quality & Structure",
                    "Internal Link Strategy",
                    "Schema Markup",
                    "Page Loading Speed"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Optimize Your Pages?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a comprehensive on-page SEO analysis and optimization plan.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 mr-4"
                onClick={() => window.location.href = '/contact'}
              >
                Start Optimization
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OnPageSEO;
