
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Users, Trophy, Clipboard, ArrowLeft, MessageSquare, Settings, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import PlayerStats from '@/components/PlayerStats';

const LeagueDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data
  const league = {
    id: id || '1',
    name: 'Stockholm Sluggers',
    description: 'A competitive fantasy baseball league for Stockholm baseball enthusiasts.',
    ownerName: 'Erik Andersson',
    memberCount: 8,
    maxMembers: 12,
    seasonStart: 'Apr 15, 2023',
    seasonEnd: 'Sep 30, 2023',
    draftDate: 'Apr 1, 2023',
    draftTime: '18:00',
    isPrivate: true,
    isJoined: false,
  };
  
  const standings = [
    { rank: 1, name: 'Erik A.', wins: 15, losses: 5, points: 120 },
    { rank: 2, name: 'Sofia L.', wins: 14, losses: 6, points: 115 },
    { rank: 3, name: 'Johan S.', wins: 12, losses: 8, points: 105 },
    { rank: 4, name: 'Anna B.', wins: 10, losses: 10, points: 95 },
    { rank: 5, name: 'Lars K.', wins: 8, losses: 12, points: 85 },
    { rank: 6, name: 'Maria H.', wins: 7, losses: 13, points: 80 },
    { rank: 7, name: 'Olof G.', wins: 5, losses: 15, points: 70 },
    { rank: 8, name: 'Lena F.', wins: 4, losses: 16, points: 65 },
  ];
  
  const players = [
    { id: 1, name: 'Marcus Ericsson', position: 'OF', team: 'Stockholm', stats: { avg: 0.328, hr: 12, rbi: 45, runs: 38, sb: 8 } },
    { id: 2, name: 'Anders Lindström', position: 'P', team: 'Göteborg', stats: { avg: 0.000, hr: 0, rbi: 0, runs: 0, sb: 0 } },
    { id: 3, name: 'Karl Nilsson', position: '1B', team: 'Malmö', stats: { avg: 0.276, hr: 18, rbi: 52, runs: 32, sb: 2 } },
  ];
  
  const members = [
    { id: 1, name: 'Erik Andersson', role: 'Commissioner', isActive: true },
    { id: 2, name: 'Sofia Lindqvist', role: 'Member', isActive: true },
    { id: 3, name: 'Johan Svensson', role: 'Member', isActive: true },
    { id: 4, name: 'Anna Bengtsson', role: 'Member', isActive: true },
    { id: 5, name: 'Lars Karlsson', role: 'Member', isActive: true },
    { id: 6, name: 'Maria Holm', role: 'Member', isActive: true },
    { id: 7, name: 'Olof Gustafsson', role: 'Member', isActive: true },
    { id: 8, name: 'Lena Fredriksson', role: 'Member', isActive: true },
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">League Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground">Description</h4>
                    <p>{league.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Commissioner</h4>
                    <p>{league.ownerName}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Privacy</h4>
                    <div className="flex items-center">
                      {league.isPrivate ? (
                        <>
                          <Lock size={16} className="mr-2 text-muted-foreground" />
                          <span>Private (Password Protected)</span>
                        </>
                      ) : (
                        <>
                          <Users size={16} className="mr-2 text-muted-foreground" />
                          <span>Public (Open to Join)</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground">Season Duration</h4>
                    <p>{league.seasonStart} - {league.seasonEnd}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Draft Date</h4>
                    <p>{league.draftDate} at {league.draftTime}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Members</h4>
                    <p>{league.memberCount}/{league.maxMembers} teams</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Current Standings</h3>
                <Button variant="outline" size="sm" onClick={() => setActiveTab('standings')}>
                  View Full Standings
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2">#</th>
                      <th className="text-left py-3 px-2">Team</th>
                      <th className="text-center py-3 px-2">W</th>
                      <th className="text-center py-3 px-2">L</th>
                      <th className="text-right py-3 px-2">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.slice(0, 5).map((team) => (
                      <tr key={team.rank} className="border-b border-border last:border-0">
                        <td className="py-3 px-2 font-medium">
                          {team.rank <= 3 ? (
                            <span className={
                              team.rank === 1 
                                ? "text-yellow-500" 
                                : team.rank === 2 
                                  ? "text-gray-400" 
                                  : "text-amber-600"
                            }>
                              {team.rank}
                            </span>
                          ) : (
                            team.rank
                          )}
                        </td>
                        <td className="py-3 px-2">{team.name}</td>
                        <td className="py-3 px-2 text-center">{team.wins}</td>
                        <td className="py-3 px-2 text-center">{team.losses}</td>
                        <td className="py-3 px-2 text-right font-medium">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Top Players</h3>
                <Button variant="outline" size="sm" onClick={() => setActiveTab('players')}>
                  View All Players
                </Button>
              </div>
              <div className="space-y-6">
                {players.map((player) => (
                  <div key={player.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium">{player.name}</h4>
                        <p className="text-sm text-muted-foreground">{player.position} | {player.team}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                        {player.position}
                      </span>
                    </div>
                    <PlayerStats 
                      stats={{
                        weeklyStats: player.stats,
                        seasonStats: player.stats,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'standings':
        return (
          <div className="glass-card rounded-xl p-6 animate-fade-in">
            <h3 className="font-bold text-lg mb-6">League Standings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">#</th>
                    <th className="text-left py-3 px-4 font-medium">Team</th>
                    <th className="text-center py-3 px-4 font-medium">Wins</th>
                    <th className="text-center py-3 px-4 font-medium">Losses</th>
                    <th className="text-center py-3 px-4 font-medium">Win %</th>
                    <th className="text-right py-3 px-4 font-medium">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team) => (
                    <tr key={team.rank} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="py-4 px-4">
                        {team.rank <= 3 ? (
                          <span className={cn(
                            "inline-flex items-center justify-center w-6 h-6 rounded-full text-white font-medium",
                            team.rank === 1 
                              ? "bg-yellow-500" 
                              : team.rank === 2 
                                ? "bg-gray-400" 
                                : "bg-amber-600"
                          )}>
                            {team.rank}
                          </span>
                        ) : (
                          team.rank
                        )}
                      </td>
                      <td className="py-4 px-4 font-medium">{team.name}</td>
                      <td className="py-4 px-4 text-center">{team.wins}</td>
                      <td className="py-4 px-4 text-center">{team.losses}</td>
                      <td className="py-4 px-4 text-center">
                        {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}%
                      </td>
                      <td className="py-4 px-4 text-right font-medium">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'players':
        return (
          <div className="glass-card rounded-xl p-6 animate-fade-in">
            <h3 className="font-bold text-lg mb-6">Players</h3>
            <div className="space-y-6">
              {players.map((player) => (
                <div key={player.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">{player.name}</h4>
                      <p className="text-sm text-muted-foreground">{player.position} | {player.team}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {player.position}
                    </span>
                  </div>
                  <PlayerStats 
                    stats={{
                      weeklyStats: player.stats,
                      seasonStats: player.stats,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 'members':
        return (
          <div className="glass-card rounded-xl p-6 animate-fade-in">
            <h3 className="font-bold text-lg mb-6">League Members</h3>
            <div className="space-y-4">
              {members.map((member) => (
                <div 
                  key={member.id} 
                  className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                      {member.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span 
                      className={cn(
                        "inline-block w-2 h-2 rounded-full mr-2",
                        member.isActive ? "bg-green-500" : "bg-gray-400"
                      )}
                    ></span>
                    <span className="text-sm text-muted-foreground">
                      {member.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [password, setPassword] = useState('');
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Link to="/leagues" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Leagues
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{league.name}</h1>
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{league.memberCount}/{league.maxMembers} Members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Draft: {league.draftDate}</span>
                  </div>
                  {league.isPrivate && (
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 mr-1" />
                      <span>Private</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-3">
                {!league.isJoined ? (
                  <Button onClick={() => setShowJoinModal(true)}>
                    Join League
                  </Button>
                ) : (
                  <>
                    <Button variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      League Chat
                    </Button>
                    <Button>
                      <Trophy className="h-4 w-4 mr-2" />
                      My Team
                    </Button>
                  </>
                )}
                
                {league.ownerName === 'Erik Andersson' && (
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage League
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 border-b border-border animate-fade-in">
            <div className="flex space-x-6 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'standings', label: 'Standings' },
                { id: 'players', label: 'Players' },
                { id: 'members', label: 'Members' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "pb-3 px-1 font-medium whitespace-nowrap transition-colors",
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </div>
      
      {/* Join Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-xl p-8 max-w-md w-full animate-scale-in">
            <h2 className="text-2xl font-bold mb-4">Join {league.name}</h2>
            
            {league.isPrivate ? (
              <>
                <p className="text-muted-foreground mb-6">
                  This is a private league. Please enter the password to join.
                </p>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    League Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter password"
                  />
                </div>
              </>
            ) : (
              <p className="text-muted-foreground mb-6">
                You're about to join {league.name}. Click confirm to proceed.
              </p>
            )}
            
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => setShowJoinModal(false)}>
                Cancel
              </Button>
              <Button>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeagueDetails;
