
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: December 2024</p>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are stored on your computer or mobile device 
                    when you visit our website. They help us provide you with a better experience 
                    by remembering your preferences and analyzing how you use our site.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies are necessary for the website to function properly. They enable 
                      basic functions like page navigation and access to secure areas.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      We use analytics cookies to understand how visitors interact with our website. 
                      This helps us improve our site and services.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies track your online activity to help us deliver more relevant 
                      advertising and measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    We may use third-party services that set cookies on our behalf, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                    <li><strong>Google Ads:</strong> For advertising and remarketing</li>
                    <li><strong>Facebook Pixel:</strong> For social media advertising</li>
                    <li><strong>Calendly:</strong> For appointment scheduling</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                    <li>Third-party opt-out: You can opt out of third-party cookies directly</li>
                    <li>Cookie preferences: Use our cookie preference center when available</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Please note that disabling cookies may affect the functionality of our website 
                    and your user experience. Some features may not work properly without cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update this Cookie Policy from time to time. We will notify you of any 
                    changes by posting the new policy on this page with an updated date.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
