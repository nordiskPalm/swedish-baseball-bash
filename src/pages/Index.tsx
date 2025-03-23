import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Trophy, Users, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import LeagueCard from '@/components/LeagueCard';

const Index = () => {
  const featuredLeagues = [
    {
      id: '1',
      name: 'Stockholm Sluggers',
      ownerName: 'Erik Andersson',
      memberCount: 8,
      maxMembers: 12,
      seasonStart: 'Apr 15, 2023',
      draftDate: 'Apr 1, 2023',
      isPrivate: false,
    },
    {
      id: '2',
      name: 'Göteborg Batters',
      ownerName: 'Sofia Lindqvist',
      memberCount: 10,
      maxMembers: 10,
      seasonStart: 'Apr 15, 2023',
      draftDate: 'Apr 3, 2023',
      isPrivate: true,
    },
  ];

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: 'Customizable Schedule',
      description: "Set your own draft dates and season duration to fit your league's needs."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Invite Friends',
      description: "Create private leagues and invite friends with a custom link or password protection."
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: 'Detailed Statistics',
      description: "Track weekly and season-long performance with comprehensive player statistics."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 md:px-10 lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-xl animate-fade-in">
              <div>
                <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary font-medium text-sm mb-6">
                  Svenska Fantasy Baseball
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Create your ultimate fantasy baseball experience
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Join the most immersive Swedish fantasy baseball platform. Create leagues, draft players, and compete with friends throughout the season.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="mr-2 h-4 w-4 text-primary" />
                No credit card required to start
              </div>
            </div>
            
            <div className="relative animate-slide-in">
              <div className="relative z-10 glass-card rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1508344928928-7165b67de128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Baseball players"
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Fantasy Baseball Enthusiasts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run the perfect fantasy baseball league with your friends, colleagues, or family.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Leagues Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Leagues</h2>
              <p className="text-muted-foreground mt-2">Join an existing league or create your own.</p>
            </div>
            <Link to="/leagues">
              <Button variant="outline">
                View All Leagues
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLeagues.map((league, index) => (
              <LeagueCard 
                key={league.id} 
                {...league} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
            
            <div className="glass-card rounded-xl overflow-hidden flex flex-col justify-center items-center p-10 text-center animate-scale-in" style={{ animationDelay: `200ms` }}>
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Create Your Own League</h3>
              <p className="text-muted-foreground mb-6">Set your own rules, invite friends, and start playing.</p>
              <Link to="/create-league">
                <Button>Create a League</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Play Fantasy Baseball?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join thousands of Swedish baseball fans in the ultimate fantasy baseball experience.
          </p>
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-2xl font-display font-bold">
                Svenska <span className="text-primary">Baseball</span>
              </Link>
              <p className="mt-4 text-muted-foreground">
                The premier fantasy baseball platform for Swedish baseball enthusiasts.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/leagues" className="text-muted-foreground hover:text-primary transition-colors">Leagues</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/rules" className="text-muted-foreground hover:text-primary transition-colors">Rules</Link></li>
                <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Svenska Baseball Fantasy. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
