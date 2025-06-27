
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                SEO Pricing Plans
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the perfect SEO package for your business. All plans include our 
                satisfaction guarantee and 17+ years of proven expertise.
              </p>
            </div>
          </div>
        </div>
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
