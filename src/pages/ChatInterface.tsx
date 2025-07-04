
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Send, 
  Mic, 
  Image, 
  BookOpen,
  TrendingUp,
  DollarSign,
  Users,
  Bot
} from "lucide-react";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm MamaMia AI, your personal business mentor. How can I help you grow your business today?",
      timestamp: "10:00 AM",
      suggestions: ["Help me with pricing", "Create a marketing plan", "Budget advice", "Social media tips"]
    },
    {
      id: 2,
      type: "user",
      content: "I need help pricing my handmade jewelry business",
      timestamp: "10:02 AM"
    },
    {
      id: 3,
      type: "ai",
      content: "Great question! Pricing handmade jewelry involves several factors. Let me break it down for you:\n\n1. **Material Costs**: Calculate the cost of beads, wire, findings, etc.\n2. **Time Investment**: Track how long each piece takes to make\n3. **Skill Premium**: Your expertise adds value\n4. **Market Research**: Check competitor prices\n\nWould you like me to walk you through a specific pricing formula?",
      timestamp: "10:03 AM",
      suggestions: ["Yes, show me the formula", "Help with market research", "Time tracking tips"]
    }
  ]);

  const quickActions = [
    { icon: BookOpen, label: "Today's Lesson", color: "bg-pink-100 text-pink-600" },
    { icon: TrendingUp, label: "Business Tips", color: "bg-green-100 text-green-600" },
    { icon: DollarSign, label: "Pricing Help", color: "bg-blue-100 text-blue-600" },
    { icon: Users, label: "Marketing Ideas", color: "bg-purple-100 text-purple-600" }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai" as const,
        content: "That's a great question! Let me help you with that. This is a simulated response for the prototype. In the real app, this would connect to OpenAI or Claude API to provide personalized business advice.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: ["Tell me more", "Give me an example", "What's next?"]
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10 bg-pink-600">
                <AvatarFallback className="text-white">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">MamaMia AI Assistant</h1>
              <p className="text-sm text-green-600">Online • Ready to help</p>
            </div>
          </div>
          <Badge className="bg-pink-100 text-pink-800">
            WhatsApp Integration Active
          </Badge>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${action.color} mb-2`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">{action.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Container */}
        <Card className="h-[500px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-pink-600" />
              <span>AI Business Mentor Chat</span>
            </CardTitle>
          </CardHeader>
          
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-pink-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </p>
                  
                  {/* AI Suggestions */}
                  {msg.type === 'ai' && msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Avatar */}
                <div className={`${msg.type === 'user' ? 'order-1 mr-2' : 'order-2 ml-2'} flex-shrink-0`}>
                  <Avatar className={`h-8 w-8 ${msg.type === 'user' ? 'bg-pink-600' : 'bg-gray-600'}`}>
                    <AvatarFallback className="text-white text-xs">
                      {msg.type === 'user' ? 'U' : <Bot className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ))}
          </CardContent>
          
          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about your business..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="pr-20"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button onClick={handleSendMessage} className="bg-pink-600 hover:bg-pink-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💡 Try asking: "How do I find my target customers?" or "Help me create a budget"
            </p>
          </div>
        </Card>

        {/* WhatsApp Integration Info */}
        <Card className="mt-6 bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              This Same Experience, Right in WhatsApp!
            </h3>
            <p className="text-green-700 mb-4">
              Get personalized business advice, daily lessons, and instant support without leaving WhatsApp.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Connect Your WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;
