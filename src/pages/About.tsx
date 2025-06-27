
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, TrendingUp, Target, CheckCircle, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">SEOYourCompany</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              With over 17 years of experience in search engine optimization, we've helped 500+ businesses 
              dominate search results and achieve sustainable organic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses of all sizes to achieve their digital marketing goals through 
                  ethical, data-driven SEO strategies that deliver measurable results and sustainable growth.
                </p>
                <p className="text-lg text-gray-600">
                  We believe in transparency, continuous learning, and building long-term partnerships 
                  with our clients to help them succeed in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-gray-600">Clients Served</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">17+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">200%</h3>
                  <p className="text-gray-600">Avg. Traffic Increase</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Story</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  2007
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    Founded with a vision to help small businesses compete with larger corporations 
                    through strategic SEO and digital marketing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  2012
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Expanded our services to include technical SEO, content marketing, and local SEO 
                    as search engines evolved and client needs grew.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  2018
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Introduced AI-powered SEO tools and advanced analytics to provide deeper insights 
                    and more precise optimization strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generative Engine Optimization</h3>
                  <p className="text-gray-600">
                    Pioneering Generative Engine Optimization (GEO) to help brands gain visibility 
                    in AI-powered search platforms like ChatGPT, Claude, and Gemini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency with our clients. No hidden fees, 
                  no black-hat techniques, just honest communication and clear reporting.
                </p>
              </div>
              
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results-Driven</h3>
                <p className="text-gray-600">
                  Every strategy we implement is designed with measurable results in mind. 
                  We track, analyze, and optimize continuously to ensure maximum ROI.
                </p>
              </div>
              
              <div className="text-center">
                <Globe className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of industry trends and algorithm changes, constantly 
                  evolving our methods to maintain competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
