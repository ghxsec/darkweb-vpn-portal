
import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'primary' | 'secondary' | 'accent' | 'default';
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon,
  description,
  trend,
  variant = 'default',
  className
}: StatsCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'border-vpn-primary/20 bg-gradient-to-br from-vpn-primary/10 to-vpn-primary/5';
      case 'secondary':
        return 'border-vpn-secondary/20 bg-gradient-to-br from-vpn-secondary/10 to-vpn-secondary/5';
      case 'accent':
        return 'border-vpn-accent/20 bg-gradient-to-br from-vpn-accent/10 to-vpn-accent/5';
      default:
        return 'border-vpn-muted/30 bg-vpn-muted/10';
    }
  };

  return (
    <div className={cn(
      "rounded-xl backdrop-blur-sm border p-4 shadow-md animate-float",
      getVariantClasses(),
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-vpn-foreground/70">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-vpn-foreground">{value}</h3>
          
          {description && (
            <p className="text-xs text-vpn-foreground/60 mt-1">{description}</p>
          )}
          
          {trend && (
            <div className="flex items-center mt-2">
              <span className={`text-xs ${trend.isPositive ? 'text-green-400' : 'text-red-400'} flex items-center`}>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-vpn-foreground/60 ml-1">vs. last period</span>
            </div>
          )}
        </div>
        
        <div className={cn(
          "p-2 rounded-lg",
          variant === 'primary' ? 'text-vpn-primary bg-vpn-primary/10' : 
          variant === 'secondary' ? 'text-vpn-secondary bg-vpn-secondary/10' : 
          variant === 'accent' ? 'text-vpn-accent bg-vpn-accent/10' : 
          'text-vpn-foreground/70 bg-vpn-muted/20'
        )}>
          {icon}
        </div>
      </div>
    </div>
  );
}
