
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  Plus,
  Search,
  Filter,
  Download,
  Settings
} from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const stats = {
    totalUsers: 1247,
    activeLearners: 892,
    coursesCompleted: 3456,
    whatsappMessages: 12890
  };

  const recentUsers = [
    { id: 1, name: "Amara Okafor", location: "Lagos, Nigeria", joined: "2024-01-15", status: "Active", progress: 75 },
    { id: 2, name: "Fatima Al-Rashid", location: "Cairo, Egypt", joined: "2024-01-14", status: "Active", progress: 60 },
    { id: 3, name: "Grace Mwangi", location: "Nairobi, Kenya", joined: "2024-01-13", status: "Inactive", progress: 30 },
    { id: 4, name: "Mariam Diallo", location: "Dakar, Senegal", joined: "2024-01-12", status: "Active", progress: 90 },
  ];

  const courses = [
    { id: 1, title: "Digital Marketing Basics", lessons: 15, enrolled: 234, completion: 78 },
    { id: 2, title: "Financial Planning for SMEs", lessons: 12, enrolled: 189, completion: 65 },
    { id: 3, title: "AI Tools for Business", lessons: 20, enrolled: 156, completion: 45 },
    { id: 4, title: "Social Media Strategy", lessons: 18, enrolled: 203, completion: 82 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">MamaMia AI Admin</h1>
            <p className="text-gray-600">Manage your microlearning platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Learners</CardTitle>
              <BookOpen className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.activeLearners.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.coursesCompleted.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+23% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">WhatsApp Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.whatsappMessages.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage registered users and their learning progress</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search users..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.location}</TableCell>
                        <TableCell>{new Date(user.joined).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="bg-gray-200 rounded-full h-2 w-16">
                              <div 
                                className="bg-pink-600 h-2 rounded-full" 
                                style={{ width: `${user.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{user.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Course Management</CardTitle>
                    <CardDescription>Create and manage microlearning courses</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>{course.lessons} lessons</span>
                          <span>{course.enrolled} enrolled</span>
                          <span>{course.completion}% completion rate</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Analytics</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp Integration</CardTitle>
                <CardDescription>Monitor and manage WhatsApp messaging</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">12,890</div>
                      <div className="text-sm text-gray-600">Messages Sent</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">89%</div>
                      <div className="text-sm text-gray-600">Delivery Rate</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">76%</div>
                      <div className="text-sm text-gray-600">Engagement Rate</div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Recent AI Interactions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>"How do I price my services?"</span>
                        <span className="text-gray-500">2 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>"What's the best social media platform for my business?"</span>
                        <span className="text-gray-500">5 min ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span>"Can you help me create a budget template?"</span>
                        <span className="text-gray-500">8 min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure your MamaMia AI platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="whatsapp-token">WhatsApp Business API Token</Label>
                    <Input id="whatsapp-token" placeholder="Enter your WhatsApp API token" />
                  </div>
                  
                  <div>
                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                    <Input id="openai-key" type="password" placeholder="Enter your OpenAI API key" />
                  </div>
                  
                  <div>
                    <Label htmlFor="claude-key">Claude API Key</Label>
                    <Input id="claude-key" type="password" placeholder="Enter your Claude API key" />
                  </div>
                  
                  <div>
                    <Label htmlFor="daily-message-limit">Daily Message Limit per User</Label>
                    <Input id="daily-message-limit" type="number" defaultValue="10" />
                  </div>
                </div>
                
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
