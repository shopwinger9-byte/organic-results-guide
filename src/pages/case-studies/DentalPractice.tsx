import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const DentalPracticeCaseStudy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" className="mb-6" onClick={() => window.location.href = '/case-studies'}>
              <ArrowLeft className="mr-2 h-4 w-4" />Back to Case Studies
            </Button>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Dental Practice: 250% Traffic Growth Competing Against Corporate Chains</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card><CardContent className="pt-6 text-center"><TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" /><div className="text-4xl font-bold text-gray-900 mb-2">250%</div><div className="text-gray-600">Traffic Increase</div></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><Target className="h-12 w-12 text-blue-600 mx-auto mb-4" /><div className="text-4xl font-bold text-gray-900 mb-2">130+</div><div className="text-gray-600">Keywords Ranking</div></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><Users className="h-12 w-12 text-purple-600 mx-auto mb-4" /><div className="text-4xl font-bold text-gray-900 mb-2">180%</div><div className="text-gray-600">Conversion Increase</div></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" /><div className="text-4xl font-bold text-gray-900 mb-2">4 Months</div><div className="text-gray-600">To Achieve Results</div></CardContent></Card>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Attract More Patients?</h2>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.location.href = '/contact'}>Get Your Free SEO Audit</Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DentalPracticeCaseStudy;