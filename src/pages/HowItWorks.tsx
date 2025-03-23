
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ListOrdered, Users, Calendar, Trophy, Play, Zap, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Create or Join a League",
      description: "Start by creating your own league as a commissioner or join an existing league with friends using a password or invite link.",
      number: 1
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: "Set Up Your Season",
      description: "Choose your draft date, scoring settings, and league duration to customize the experience for your players.",
      number: 2
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Draft Your Team",
      description: "Participate in a live draft where each manager selects players to build their fantasy roster based on real-world performance predictions.",
      number: 3
    },
    {
      icon: <Play className="h-12 w-12 text-primary" />,
      title: "Manage Your Roster",
      description: "Throughout the season, make strategic roster changes including trades, waiver wire pickups, and starting lineup adjustments.",
      number: 4
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Compete Weekly",
      description: "Face off against other teams in your league each week, earning points based on your players' real-world performance.",
      number: 5
    },
    {
      icon: <Trophy className="h-12 w-12 text-primary" />,
      title: "Win the Championship",
      description: "The top teams advance to the playoffs at the end of the regular season, competing for the league championship.",
      number: 6
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            How <span className="text-primary">Fantasy Baseball</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            A step-by-step guide to creating, playing, and winning in your fantasy baseball league.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Link to="/create-league">
              <Button size="lg">
                Create a League
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/leagues">
              <Button variant="outline" size="lg">
                Browse Leagues
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Your Fantasy Baseball Journey
          </h2>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="md:w-1/2 relative">
                  <div className="bg-primary/10 rounded-full p-10 inline-flex relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0 md:left-full' : 'left-0 md:right-full'} transform -translate-y-1/2 hidden lg:block`}>
                    <ArrowRight className={`h-12 w-12 text-primary/30 ${index % 2 === 1 && 'rotate-180'}`} />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-10 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">How many players can I have on my team?</h3>
              <p className="text-muted-foreground">
                You can typically have between 15-25 players on your roster, but the exact number is 
                determined by your league's commissioner and settings.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">What happens if one of my players gets injured?</h3>
              <p className="text-muted-foreground">
                You can place injured players on your bench or in a designated "IL" (Injured List) slot, 
                allowing you to pick up a replacement without dropping the injured player.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Can I make trades with other managers?</h3>
              <p className="text-muted-foreground">
                Yes! You can propose trades with other managers in your league. Depending on your league settings, 
                trades may be subject to league-wide review or commissioner approval.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">How is scoring calculated?</h3>
              <p className="text-muted-foreground">
                Scoring is based on the real-world performance of your players. Your league can use 
                category-based scoring (rotisserie style) or points-based scoring systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <ListOrdered className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Create your first fantasy baseball league today and experience the excitement!
          </p>
          <Link to="/create-league">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              Create Your League
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
