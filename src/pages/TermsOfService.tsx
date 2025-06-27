
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
              <p className="text-gray-600 mb-8">Last updated: December 2024</p>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using SEOYourCompany's services, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 mb-4">
                    SEOYourCompany provides search engine optimization (SEO) services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Keyword research and strategy development</li>
                    <li>On-page and technical SEO optimization</li>
                    <li>Content creation and optimization</li>
                    <li>Link building campaigns</li>
                    <li>Local SEO optimization</li>
                    <li>Analytics and reporting</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                  <p className="text-gray-700 mb-4">Clients agree to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide accurate information about their business and website</li>
                    <li>Grant necessary access to website and analytics accounts</li>
                    <li>Review and approve content before publication</li>
                    <li>Make timely payments as agreed</li>
                    <li>Communicate any concerns or changes promptly</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                  <p className="text-gray-700 mb-4">
                    Payment is due monthly in advance. Services may be suspended for late payments. 
                    A setup fee may apply to new accounts. Refunds are provided according to our 
                    satisfaction guarantee policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Results and Timeline</h2>
                  <p className="text-gray-700 mb-4">
                    SEO results vary and depend on many factors including competition, website condition, 
                    and market dynamics. While we strive for optimal results, we cannot guarantee 
                    specific rankings or traffic increases.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
                  <p className="text-gray-700 mb-4">
                    Either party may terminate services with 30 days written notice. Upon termination, 
                    clients retain rights to all work completed and paid for.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    SEOYourCompany's liability is limited to the amount paid for services. We are not 
                    liable for indirect, incidental, or consequential damages.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    For questions about these terms, contact us at:
                  </p>
                  <div className="text-gray-700">
                    <p>Email: shopwinger9@gmail.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: New York, NY</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
