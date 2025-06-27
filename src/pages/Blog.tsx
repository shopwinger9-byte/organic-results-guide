
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Search, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Complete Guide to SEO in 2024: What's Changed and What Hasn't",
      excerpt: "Discover the latest SEO trends, algorithm updates, and strategies that are driving results in 2024.",
      category: "SEO Strategy",
      date: "December 15, 2024",
      author: "SEO Expert Team",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Local SEO Checklist: 15 Steps to Dominate Local Search Results",
      excerpt: "A comprehensive checklist to help local businesses improve their visibility in local search results.",
      category: "Local SEO",
      date: "December 10, 2024",
      author: "Local SEO Specialist",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Technical SEO Audit: How to Find and Fix Critical Issues",
      excerpt: "Learn how to perform a comprehensive technical SEO audit and fix issues that impact your rankings.",
      category: "Technical SEO",
      date: "December 5, 2024",
      author: "Technical SEO Expert",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Content Strategy for SEO: Creating Content That Ranks and Converts",
      excerpt: "Master the art of creating SEO-optimized content that not only ranks well but also converts visitors.",
      category: "Content Marketing",
      date: "November 28, 2024",
      author: "Content Strategist",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Link Building in 2024: Ethical Strategies That Actually Work",
      excerpt: "Discover white-hat link building strategies that will boost your domain authority and rankings.",
      category: "Link Building",
      date: "November 20, 2024",
      author: "Link Building Expert",
      readTime: "9 min read",
      featured: false
    },
    {
      title: "E-commerce SEO: Optimizing Product Pages for Maximum Visibility",
      excerpt: "Learn how to optimize your e-commerce product pages to drive more organic traffic and sales.",
      category: "E-commerce SEO",
      date: "November 15, 2024",
      author: "E-commerce SEO Specialist",
      readTime: "8 min read",
      featured: false
    }
  ];

  const categories = ["All", "SEO Strategy", "Local SEO", "Technical SEO", "Content Marketing", "Link Building", "E-commerce SEO"];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                SEO Insights & Strategies
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay ahead of the curve with our latest SEO insights, strategies, and 
                industry updates from our team of experts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${post.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    {post.category === "SEO Strategy" && <Search className="h-16 w-16 text-blue-600" />}
                    {post.category === "Local SEO" && <TrendingUp className="h-16 w-16 text-green-600" />}
                    {post.category === "Technical SEO" && <FileText className="h-16 w-16 text-purple-600" />}
                    {!["SEO Strategy", "Local SEO", "Technical SEO"].includes(post.category) && <FileText className="h-16 w-16 text-gray-600" />}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className={`${post.featured ? 'text-2xl' : 'text-xl'} hover:text-blue-600 cursor-pointer`}>
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want Personalized SEO Advice?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a free consultation with our SEO experts to discuss your specific challenges.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
