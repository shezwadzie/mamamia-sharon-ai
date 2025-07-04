
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, BookOpen, Target, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-pink-600" />
            <h1 className="text-2xl font-bold text-gray-900">MamaMia AI</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/admin" className="text-gray-600 hover:text-pink-600 transition-colors">
              Admin Dashboard
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-pink-600 transition-colors">
              Courses
            </Link>
            <Link to="/chat" className="text-gray-600 hover:text-pink-600 transition-colors">
              AI Assistant
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">
            🚀 Now in Beta - Free for African Women Entrepreneurs
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Learn. Grow. Succeed.
            <span className="block text-pink-600">Right from WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MamaMia AI delivers personalized microlearning in digital marketing, budgeting, 
            and business skills directly to your WhatsApp - just 5 minutes a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
              Start Learning Free
            </Button>
            <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Women Entrepreneurs Choose MamaMia AI
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle className="text-pink-900">WhatsApp Native</CardTitle>
                <CardDescription>
                  No new apps to download. Learn directly through WhatsApp - the platform you already use daily.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-purple-900">Microlearning</CardTitle>
                <CardDescription>
                  Just 5 minutes a day. Bite-sized lessons that fit into your busy schedule as an entrepreneur.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-900">AI Personalized</CardTitle>
                <CardDescription>
                  Adaptive learning paths based on your business stage, goals, and progress.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Master Essential Business Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Digital Marketing", icon: "📱", description: "Social media, content creation, customer engagement" },
              { title: "Financial Literacy", icon: "💰", description: "Budgeting, pricing, cash flow management" },
              { title: "AI & Automation", icon: "🤖", description: "ChatGPT, Canva AI, productivity tools" },
              { title: "Freelancing", icon: "💼", description: "Finding clients, project management, scaling" }
            ].map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{topic.icon}</div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">1000+</div>
              <div className="text-gray-600">Women Entrepreneurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">African Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$1</div>
              <div className="text-gray-600">Monthly Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of African women entrepreneurs already learning with MamaMia AI
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
            Start Your Free Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-6 w-6 text-pink-400" />
              <span className="text-xl font-bold">MamaMia AI</span>
            </div>
            <p className="text-gray-400">
              Empowering African women entrepreneurs through accessible microlearning.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin</Link></li>
              <li><Link to="/chat" className="hover:text-white transition-colors">AI Assistant</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: +1-XXX-XXX-XXXX</li>
              <li>Email: hello@mamaai.africa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Built With</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Supabase</li>
              <li>OpenAI & Claude</li>
              <li>WhatsApp Business API</li>
              <li>Lovable.dev</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
