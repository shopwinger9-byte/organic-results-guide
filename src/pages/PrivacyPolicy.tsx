
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: December 2024</p>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    fill out a form, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, company information</li>
                    <li><strong>Website Information:</strong> Website URL, current SEO metrics, business goals</li>
                    <li><strong>Communication:</strong> Messages you send us through contact forms or email</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide, maintain, and improve our SEO services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Personalize and improve your experience</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>With your consent or at your direction</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who assist us in operating our business</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar tracking technologies to collect information about your 
                    browsing activities and personalize your experience on our website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
