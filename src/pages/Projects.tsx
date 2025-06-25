
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Globe, Search, Plus, Calendar, Target, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const isLoggedIn = false; // This will be replaced with actual auth state
  const [searchTerm, setSearchTerm] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <div className="flex-1 flex items-center justify-center py-12">
          <Card className="max-w-md text-center">
            <CardHeader>
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle>Access Your Projects</CardTitle>
              <CardDescription>
                Sign in to view and manage your guest posting projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login">
                <Button className="w-full">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="w-full">Create Account</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
      </div>
    );
  }

  const projects = [
    {
      id: 1,
      name: "E-commerce SEO Campaign",
      description: "Guest posts for online retail expansion targeting shopping keywords",
      status: "Active",
      budget: 2000,
      spent: 1450,
      posts: { completed: 15, total: 20 },
      startDate: "2024-01-15",
      category: "E-commerce"
    },
    {
      id: 2,
      name: "Tech Startup Awareness",
      description: "Building brand awareness for new SaaS platform in productivity niche",
      status: "Active",
      budget: 1500,
      spent: 890,
      posts: { completed: 8, total: 12 },
      startDate: "2024-01-22",
      category: "Technology"
    },
    {
      id: 3,
      name: "Health & Wellness Links",
      description: "Authority building for health supplement company through expert content",
      status: "Completed",
      budget: 1200,
      spent: 1200,
      posts: { completed: 10, total: 10 },
      startDate: "2023-12-01",
      category: "Health"
    },
    {
      id: 4,
      name: "Travel Blog Outreach",
      description: "Promoting travel insurance through destination and travel planning content",
      status: "Paused",
      budget: 800,
      spent: 320,
      posts: { completed: 3, total: 8 },
      startDate: "2024-02-01",
      category: "Travel"
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Projects</h1>
          <p className="text-gray-600">
            Manage your guest posting campaigns and track their performance
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5,500</div>
              <p className="text-xs text-muted-foreground">Across all projects</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Posts Published</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">36</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Completion Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center justify-between">
                      {project.name}
                      <Badge 
                        variant={
                          project.status === "Active" ? "default" :
                          project.status === "Completed" ? "secondary" :
                          "outline"
                        }
                      >
                        {project.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Budget Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Budget Used</span>
                      <span>${project.spent} / ${project.budget}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(project.spent / project.budget) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Posts Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Posts Published</span>
                      <span>{project.posts.completed} / {project.posts.total}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(project.posts.completed / project.posts.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Category</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-medium">{project.startDate}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Analytics
                    </Button>
                    {project.status === "Paused" && (
                      <Button className="flex-1">
                        Resume
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm ? "Try adjusting your search terms" : "Get started by creating your first project"}
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Project
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
