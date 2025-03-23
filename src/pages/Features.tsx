
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap, Users, Trophy, Calendar, Puzzle, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Competitive Leagues",
      description: "Create or join leagues with friends and compete throughout the baseball season with our accurate scoring system.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Customizable Schedule",
      description: "Set your own draft dates and league duration to fit your schedule perfectly.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Social Experience",
      description: "Invite friends to private leagues and enjoy fantasy baseball as a social experience with chat and notifications.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Live Updates",
      description: "Get real-time updates of your players' performances and stay on top of the action.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Advanced Statistics",
      description: "Access detailed statistics and analytics to make informed decisions about your fantasy team.",
    },
    {
      icon: <Puzzle className="h-10 w-10 text-primary" />,
      title: "Flexible Roster Management",
      description: "Customize team structures, scoring rules, and trading policies to match your league preferences.",
    },
  ];
  
  const additionalFeatures = [
    "Automated scoring system",
    "Mobile-responsive design",
    "Weekly matchups",
    "Trade proposals and review",
    "Waiver wire pickups",
    "Player injury alerts",
    "Draft day tools",
    "Season history archives",
    "Commissioner tools",
    "League chat & social features",
    "Custom team logos",
    "Player rankings & projections"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Features <span className="text-primary">That Make Us Stand Out</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Discover all the tools and features that make Svenska Baseball Fantasy the premier platform for fantasy baseball in Sweden.
          </p>
          <Link to="/signup" className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="mt-4">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-primary/60 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-5 p-3 rounded-full bg-primary/10 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-20 px-6 md:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">More Features</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 rounded-xl bg-secondary/50 border border-border animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-2 mr-3 rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join thousands of Swedish baseball fans in the ultimate fantasy baseball experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Sign Up Now
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
