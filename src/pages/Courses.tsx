
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play,
  CheckCircle,
  Lock
} from "lucide-react";

const Courses = () => {
  const [selectedPath, setSelectedPath] = useState("beginner");

  const learningPaths = {
    beginner: {
      title: "Getting Started",
      description: "Perfect for new entrepreneurs",
      courses: [
        {
          id: 1,
          title: "Business Basics Fundamentals",
          description: "Learn the core concepts of starting and running a business",
          lessons: 8,
          duration: "40 min",
          enrolled: 1247,
          rating: 4.8,
          progress: 0,
          status: "available",
          topics: ["Business Planning", "Market Research", "Customer Validation"]
        },
        {
          id: 2,
          title: "Digital Presence Setup",
          description: "Create your online presence across social media platforms",
          lessons: 12,
          duration: "60 min",
          enrolled: 892,
          rating: 4.7,
          progress: 0,
          status: "available",
          topics: ["Social Media", "Website Basics", "Online Branding"]
        },
        {
          id: 3,
          title: "Basic Financial Management",
          description: "Understand cash flow, budgeting, and pricing",
          lessons: 10,
          duration: "50 min",
          enrolled: 734,
          rating: 4.9,
          progress: 0,
          status: "locked",
          topics: ["Budgeting", "Pricing", "Cash Flow"]
        }
      ]
    },
    intermediate: {
      title: "Growing Your Business",
      description: "Scale your existing business",
      courses: [
        {
          id: 4,
          title: "Advanced Digital Marketing",
          description: "Master social media advertising and content strategy",
          lessons: 15,
          duration: "75 min",
          enrolled: 567,
          rating: 4.6,
          progress: 0,
          status: "available",
          topics: ["Facebook Ads", "Content Marketing", "Email Marketing"]
        },
        {
          id: 5,
          title: "AI Tools for Business Growth",
          description: "Leverage AI to automate and scale your business",
          lessons: 18,
          duration: "90 min",
          enrolled: 423,
          rating: 4.8,
          progress: 0,
          status: "available",
          topics: ["ChatGPT", "Canva AI", "Automation Tools"]
        }
      ]
    },
    advanced: {
      title: "Scaling & Leadership",
      description: "Build a sustainable enterprise",
      courses: [
        {
          id: 6,
          title: "Team Building & Leadership",
          description: "Learn to manage teams and lead effectively",
          lessons: 20,
          duration: "100 min",
          enrolled: 234,
          rating: 4.9,
          progress: 0,
          status: "available",
          topics: ["Leadership", "Team Management", "Communication"]
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedPath];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Paths</h1>
          <p className="text-gray-600">Choose your entrepreneurial journey and start learning today</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Learning Path Selection */}
        <Tabs value={selectedPath} onValueChange={setSelectedPath} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="beginner" className="flex flex-col items-center py-3">
              <span className="font-semibold">Beginner</span>
              <span className="text-xs text-gray-500">New to business</span>
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="flex flex-col items-center py-3">
              <span className="font-semibold">Intermediate</span>
              <span className="text-xs text-gray-500">Growing business</span>
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex flex-col items-center py-3">
              <span className="font-semibold">Advanced</span>
              <span className="text-xs text-gray-500">Scaling up</span>
            </TabsTrigger>
          </TabsList>

          {/* Path Overview */}
          <Card className="mb-8 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-pink-900">{currentPath.title}</CardTitle>
                  <CardDescription className="text-lg text-pink-700 mt-2">
                    {currentPath.description}
                  </CardDescription>
                </div>
                <Badge className="bg-pink-600 text-white text-sm px-3 py-1">
                  {currentPath.courses.length} Courses
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Courses Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentPath.courses.map((course, index) => (
              <Card key={course.id} className={`relative hover:shadow-lg transition-shadow ${
                course.status === 'locked' ? 'opacity-75' : ''
              }`}>
                {course.status === 'locked' && (
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      Course {index + 1}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled}</span>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Progress */}
                    {course.progress > 0 ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ) : null}

                    {/* Action Button */}
                    <Button 
                      className={`w-full ${
                        course.status === 'locked' 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : course.progress > 0 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-pink-600 hover:bg-pink-700'
                      }`}
                      disabled={course.status === 'locked'}
                    >
                      {course.status === 'locked' ? (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Complete Previous Course
                        </>
                      ) : course.progress > 0 ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Course
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp Integration CTA */}
          <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-900 mb-2">
                Learn Directly on WhatsApp
              </CardTitle>
              <CardDescription className="text-lg text-green-700 mb-4">
                Get daily 5-minute lessons delivered right to your WhatsApp. No app downloads needed!
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start WhatsApp Learning
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600">
                  View Sample Lesson
                </Button>
              </div>
            </CardHeader>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
