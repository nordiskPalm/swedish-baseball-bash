
import React from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  label: string;
  value: string | number;
  change?: number;
  isPositive?: boolean;
}

const Stat: React.FC<StatProps> = ({ label, value, change, isPositive }) => (
  <div className="flex flex-col">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-lg font-medium">{value}</span>
    {change !== undefined && (
      <span 
        className={cn(
          "text-xs",
          isPositive ? "text-green-600" : "text-red-600"
        )}
      >
        {isPositive ? '+' : ''}{change}%
      </span>
    )}
  </div>
);

interface PlayerStatsProps {
  stats: {
    weeklyStats: {
      avg: number;
      hr: number;
      rbi: number;
      runs: number;
      sb: number;
    };
    seasonStats: {
      avg: number;
      hr: number;
      rbi: number;
      runs: number;
      sb: number;
    };
  };
  className?: string;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ stats, className }) => {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Weekly Performance</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            <Stat label="AVG" value={stats.weeklyStats.avg.toFixed(3)} />
            <Stat label="HR" value={stats.weeklyStats.hr} />
            <Stat label="RBI" value={stats.weeklyStats.rbi} />
            <Stat label="RUNS" value={stats.weeklyStats.runs} />
            <Stat label="SB" value={stats.weeklyStats.sb} />
          </div>
        </div>
        
        <div className="border-t border-border pt-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Season Totals</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            <Stat label="AVG" value={stats.seasonStats.avg.toFixed(3)} />
            <Stat label="HR" value={stats.seasonStats.hr} />
            <Stat label="RBI" value={stats.seasonStats.rbi} />
            <Stat label="RUNS" value={stats.seasonStats.runs} />
            <Stat label="SB" value={stats.seasonStats.sb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
