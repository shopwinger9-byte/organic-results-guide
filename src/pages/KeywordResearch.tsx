
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const KeywordResearch = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Search className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Keyword Research & Strategy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover high-value keywords that drive qualified traffic and conversions. 
                Our data-driven approach ensures you target the right terms for maximum ROI.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Keyword Analysis
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategic Keyword Research That Drives Results
                </h2>
                <p className="text-gray-700 mb-6">
                  Our comprehensive keyword research process goes beyond simple search volume. 
                  We analyze search intent, competition, and commercial value to identify 
                  opportunities that align with your business goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Search Intent Analysis</h4>
                      <p className="text-gray-600">Understanding what users really want when they search</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Competition Assessment</h4>
                      <p className="text-gray-600">Identifying winnable keywords with high potential</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Commercial Value Rating</h4>
                      <p className="text-gray-600">Prioritizing keywords that drive conversions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-700">Business & Competitor Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-700">Seed Keyword Identification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-700">Keyword Expansion & Research</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                    <span className="text-gray-700">Intent & Difficulty Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</div>
                    <span className="text-gray-700">Strategic Prioritization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="h-8 w-8 text-blue-600 mr-3" />
                    Primary Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    High-volume, high-intent keywords that directly relate to your main products or services.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-8 w-8 text-green-600 mr-3" />
                    Long-tail Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Specific, lower-competition phrases that capture users ready to convert.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                    Opportunity Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Emerging trends and gaps in competitor strategies that present quick wins.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Discover Your Keyword Opportunities?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a comprehensive keyword analysis tailored to your business goals.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 mr-4"
                onClick={() => window.location.href = '/contact'}
              >
                Start Keyword Research
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

export default KeywordResearch;
