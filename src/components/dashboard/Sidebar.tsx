
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Activity, 
  Globe, 
  User, 
  Wallet, 
  Server, 
  Network, 
  BookOpen, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed: boolean;
};

const NavItem = ({ icon, label, to, collapsed }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-vpn-muted/50 group",
        collapsed ? "justify-center" : "",
        isActive ? "bg-vpn-muted text-vpn-primary" : "text-vpn-foreground"
      )
    }
  >
    <span className={cn("text-xl", isActive => isActive ? "text-vpn-primary" : "")}>{icon}</span>
    {!collapsed && <span className="truncate">{label}</span>}
    {collapsed && (
      <div className="absolute left-full ml-2 hidden rounded-md bg-vpn-background px-2 py-1 text-sm opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-hover:block z-50">
        {label}
      </div>
    )}
  </NavLink>
);

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex-shrink-0 bg-[#111827] h-screen flex flex-col border-r border-vpn-muted/30 transition-all duration-300 relative shadow-lg",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-vpn-muted/30">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-vpn-primary to-vpn-secondary animate-pulse-glow"></span>
            <span className="font-bold text-lg text-white">VPN Dashboard</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-vpn-primary to-vpn-secondary animate-pulse-glow flex items-center justify-center"></span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg hover:bg-vpn-muted/50 text-vpn-foreground"
        >
          {collapsed ? <Menu size={18} /> : <X size={18} />}
        </button>
      </div>

      <div className="flex flex-col gap-1 p-2 flex-1 overflow-auto">
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          to="/"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Package size={20} />}
          label="Products & Services"
          to="/products"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Activity size={20} />}
          label="Monitoring"
          to="/monitoring"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Globe size={20} />}
          label="Worldwide Servers"
          to="/servers-map"
          collapsed={collapsed}
        />
        <NavItem
          icon={<User size={20} />}
          label="Account Details"
          to="/account"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Wallet size={20} />}
          label="Billing & Invoices"
          to="/billing"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Server size={20} />}
          label="Create Server"
          to="/create-server"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Network size={20} />}
          label="Network Tools"
          to="/network-tools"
          collapsed={collapsed}
        />
        <NavItem
          icon={<BookOpen size={20} />}
          label="Documentation"
          to="/docs"
          collapsed={collapsed}
        />
        <NavItem
          icon={<HelpCircle size={20} />}
          label="FAQ & Support"
          to="/support"
          collapsed={collapsed}
        />
      </div>

      <div className="border-t border-vpn-muted/30 p-4">
        <div className={cn("flex items-center gap-3", collapsed ? "justify-center" : "")}>
          <div className="h-8 w-8 rounded-full bg-vpn-muted flex items-center justify-center text-vpn-primary">
            <User size={14} />
          </div>
          {!collapsed && (
            <div>
              <div className="font-medium text-sm">John Doe</div>
              <div className="text-xs text-vpn-foreground/70">Premium User</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
