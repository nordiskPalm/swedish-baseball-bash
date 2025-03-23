
import React from 'react';
import { Calendar, Users, Lock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LeagueCardProps {
  id: string;
  name: string;
  ownerName: string;
  memberCount: number;
  maxMembers: number;
  seasonStart: string;
  draftDate: string;
  isPrivate: boolean;
  isJoined?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LeagueCard: React.FC<LeagueCardProps> = ({
  id,
  name,
  ownerName,
  memberCount,
  maxMembers,
  seasonStart,
  draftDate,
  isPrivate,
  isJoined = false,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md group animate-scale-in",
        className
      )}
      style={style}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                Fantasy League
              </span>
              {isPrivate && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                  <Lock size={12} className="mr-1" /> Private
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">{name}</h3>
            <p className="text-sm text-muted-foreground">Created by {ownerName}</p>
          </div>
          <div className="rounded-full bg-primary/10 p-2">
            <Trophy size={20} className="text-primary" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="flex items-center text-sm">
            <Users size={16} className="mr-2 text-muted-foreground" />
            <span>{memberCount}/{maxMembers} Members</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-2 text-muted-foreground" />
            <span>Draft: {draftDate}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Season starts: {seasonStart}
          </div>
          <Link 
            to={`/leagues/${id}`} 
            className="text-primary font-medium hover:underline text-sm"
          >
            {isJoined ? 'View League' : 'Learn More'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
