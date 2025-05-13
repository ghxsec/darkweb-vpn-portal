
import React from 'react';
import { Bell, Search } from 'lucide-react';

export function TopBar() {
  return (
    <div className="h-16 border-b border-vpn-muted/30 flex items-center justify-between px-6 bg-[#111827]/80 backdrop-blur-sm">
      <div>
        <h1 className="text-lg font-medium text-vpn-foreground">Welcome back, John</h1>
        <p className="text-xs text-vpn-foreground/70">Last login: Today at 10:23 AM</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-vpn-foreground/50" size={16} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-vpn-muted/30 border border-vpn-muted/30 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-vpn-primary/50 w-64"
          />
        </div>
        
        <div className="relative">
          <Bell size={20} className="text-vpn-foreground/70 hover:text-vpn-foreground cursor-pointer" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-vpn-primary text-xs flex items-center justify-center text-black font-medium">3</span>
        </div>
      </div>
    </div>
  );
}
