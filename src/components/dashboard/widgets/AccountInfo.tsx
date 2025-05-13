
import React from 'react';
import { User, Shield, CreditCard } from 'lucide-react';

export function AccountInfo() {
  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md">
      <div className="mb-4 flex items-center gap-2">
        <User size={18} className="text-vpn-primary" />
        <h3 className="text-lg font-medium text-vpn-foreground">Account Information</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-vpn-foreground/70">Account ID</span>
          <span className="text-sm font-medium text-vpn-foreground">ACC-12345-XYZ</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-vpn-foreground/70">Name</span>
          <span className="text-sm font-medium text-vpn-foreground">John Doe</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-vpn-foreground/70">Email</span>
          <span className="text-sm font-medium text-vpn-foreground">john.doe@example.com</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-vpn-foreground/70">Plan</span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-vpn-primary/20 text-vpn-primary">Premium</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-vpn-foreground/70">Member Since</span>
          <span className="text-sm font-medium text-vpn-foreground">Jan 15, 2023</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-vpn-foreground/70">Subscription</span>
          <span className="text-sm font-medium text-vpn-foreground">Auto-renews on Jun 15, 2025</span>
        </div>
        
        <div className="pt-2 flex justify-between gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-vpn-muted/30 text-vpn-foreground/80 hover:bg-vpn-muted/50 transition-colors flex-1 justify-center text-sm">
            <Shield size={14} />
            <span>Security</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-vpn-muted/30 text-vpn-foreground/80 hover:bg-vpn-muted/50 transition-colors flex-1 justify-center text-sm">
            <CreditCard size={14} />
            <span>Billing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
