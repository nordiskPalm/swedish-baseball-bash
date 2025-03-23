
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, TrendingUp, Trophy, User, Settings, Plus, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import LeagueCard from '@/components/LeagueCard';
import PlayerStats from '@/components/PlayerStats';

const Dashboard = () => {
  // Mock data
  const userLeagues = [
    {
      id: '1',
      name: 'Stockholm Sluggers',
      ownerName: 'Erik Andersson',
      memberCount: 8,
      maxMembers: 12,
      seasonStart: 'Apr 15, 2023',
      draftDate: 'Apr 1, 2023',
      isPrivate: false,
      isJoined: true,
    },
    {
      id: '3',
      name: 'Malmö Batters',
      ownerName: 'Johan Svensson',
      memberCount: 6,
      maxMembers: 10,
      seasonStart: 'Apr 20, 2023',
      draftDate: 'Apr 10, 2023',
      isPrivate: true,
      isJoined: true,
    },
  ];
  
  const playerStats = {
    weeklyStats: {
      avg: 0.328,
      hr: 3,
      rbi: 12,
      runs: 8,
      sb: 2,
    },
    seasonStats: {
      avg: 0.295,
      hr: 18,
      rbi: 65,
      runs: 54,
      sb: 15,
    },
  };
  
  const upcomingGames = [
    {
      id: '1',
      team1: 'Stockholm',
      team2: 'Göteborg',
      date: 'Today, 15:00',
    },
    {
      id: '2',
      team1: 'Malmö',
      team2: 'Uppsala',
      date: 'Tomorrow, 14:30',
    },
    {
      id: '3',
      team1: 'Umeå',
      team2: 'Linköping',
      date: 'Sat, 13:00',
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold">Welcome back, John</h1>
              <p className="text-muted-foreground mt-1">Here's what's happening with your leagues</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3 animate-fade-in">
              <Link to="/leagues">
                <Button variant="outline" className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  Find Leagues
                </Button>
              </Link>
              <Link to="/create-league">
                <Button className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Create League
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Content - 8 columns */}
            <div className="lg:col-span-8 space-y-6">
              {/* Stats Overview */}
              <div className="glass-card rounded-xl p-6 animate-scale-in">
                <h2 className="text-xl font-bold mb-6">Your Performance</h2>
                <PlayerStats stats={playerStats} />
              </div>
              
              {/* Your Leagues */}
              <div className="glass-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Your Leagues</h2>
                  <Link to="/my-leagues" className="text-primary text-sm hover:underline">
                    View All
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {userLeagues.map((league) => (
                    <LeagueCard key={league.id} {...league} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar - 4 columns */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Links */}
              <div className="glass-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: '150ms' }}>
                <h3 className="font-medium mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/my-team">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      My Team
                    </Button>
                  </Link>
                  <Link to="/rankings">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Rankings
                    </Button>
                  </Link>
                  <Link to="/schedule">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                  </Link>
                  <Link to="/settings">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Upcoming Games */}
              <div className="glass-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Upcoming Games</h3>
                  <Link to="/schedule" className="text-primary text-sm hover:underline">
                    View All
                  </Link>
                </div>
                <div className="space-y-4">
                  {upcomingGames.map((game) => (
                    <div key={game.id} className="flex justify-between items-center p-3 rounded-lg hover:bg-secondary transition-colors">
                      <div>
                        <p className="font-medium">{game.team1} vs {game.team2}</p>
                        <p className="text-sm text-muted-foreground">{game.date}</p>
                      </div>
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tips */}
              <div className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20 animate-scale-in" style={{ animationDelay: '250ms' }}>
                <h3 className="font-medium mb-3">Pro Tip</h3>
                <p className="text-sm text-muted-foreground">
                  Draft day coming soon? Research players ahead of time and create a draft strategy to maximize your team's potential.
                </p>
                <Link to="/tips" className="text-primary text-sm mt-3 inline-block hover:underline">
                  More Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
