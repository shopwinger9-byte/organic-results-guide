import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileText, Calendar, Target } from "lucide-react";

const ContentMarketing = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Content Marketing",
      price: "$1,199/month"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Content Marketing SEO Plan</h1>
            <p className="text-xl text-gray-600 mb-8">Content-driven SEO strategy that builds authority and drives organic growth</p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-purple-600">$1,199</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" onClick={handleGetStarted}>
              Start Content Strategy
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-purple-50 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Content Marketing Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Content Creation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Monthly blog posts (8)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Content calendar
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Topic research
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Strategy & Optimization</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Internal linking strategy
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Content performance tracking
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        SEO optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Scale with Content?</h2>
            <p className="text-xl text-purple-100 mb-8">Build authority and drive consistent organic growth through strategic content marketing.</p>
            <Button size="lg" className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-purple-50" onClick={handleGetStarted}>
              Start Content Marketing Plan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentMarketing;