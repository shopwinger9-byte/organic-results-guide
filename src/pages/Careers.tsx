
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersForm from "@/components/CareersForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior SEO Specialist",
      department: "SEO Team",
      location: "Remote / New York, NY",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description: "Lead SEO campaigns for enterprise clients and mentor junior team members.",
      requirements: ["5+ years SEO experience", "Proven track record with enterprise clients", "Advanced technical SEO knowledge"]
    },
    {
      title: "Content Marketing Manager",
      department: "Content Team",
      location: "Remote / New York, NY",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      description: "Develop and execute content strategies that drive organic growth for our clients.",
      requirements: ["3+ years content marketing experience", "Strong writing and editing skills", "SEO content optimization expertise"]
    },
    {
      title: "Technical SEO Analyst",
      department: "Technical Team",
      location: "Remote / New York, NY",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description: "Perform technical audits and implement advanced SEO solutions for complex websites.",
      requirements: ["Strong technical background", "Experience with SEO tools", "Knowledge of web development"]
    },
    {
      title: "Account Manager",
      department: "Client Success",
      location: "New York, NY",
      type: "Full-time",
      salary: "$55,000 - $70,000",
      description: "Manage client relationships and ensure successful delivery of SEO campaigns.",
      requirements: ["2+ years account management experience", "Strong communication skills", "Basic SEO knowledge preferred"]
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "Remote work flexibility",
    "Professional development opportunities",
    "Annual conference attendance budget",
    "Flexible PTO policy",
    "Modern office in NYC",
    "Team building events and company retreats"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Join Our SEO Expert Team
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Be part of a growing agency that's helping businesses succeed online. 
                We're looking for passionate SEO professionals to join our team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Successful Projects</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">17+</h3>
                <p className="text-gray-600">Years in Business</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl text-blue-900">{position.title}</CardTitle>
                          <p className="text-gray-600">{position.department}</p>
                        </div>
                        <Button className="mt-4 md:mt-0">Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="h-5 w-5 mr-2" />
                          {position.salary}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{position.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See the Right Position?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
        
        <CareersForm />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
