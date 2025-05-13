
import React from 'react';
import { Activity, Globe, Server, Package, User, Network, Shield } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/widgets/StatsCard';
import { BandwidthChart } from '@/components/dashboard/widgets/BandwidthChart';
import { WorldMap } from '@/components/dashboard/widgets/WorldMap';
import { ServerStatus } from '@/components/dashboard/widgets/ServerStatus';
import { ProductsList } from '@/components/dashboard/widgets/ProductsList';
import { AccountInfo } from '@/components/dashboard/widgets/AccountInfo';
import { NetworkTools } from '@/components/dashboard/widgets/NetworkTools';
import { Announcements } from '@/components/dashboard/widgets/Announcements';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-vpn-foreground">Dashboard Overview</h1>
        <p className="text-vpn-foreground/70">Monitor your VPN services and network status</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Active Servers" 
          value={42} 
          icon={<Server size={20} />} 
          description="6 servers in maintenance" 
          trend={{ value: 8, isPositive: true }}
          variant="primary"
        />
        <StatsCard 
          title="Bandwidth Usage" 
          value="1.8 TB" 
          icon={<Activity size={20} />} 
          description="Monthly allocation: 2 TB" 
          trend={{ value: 12, isPositive: true }}
          variant="secondary"
        />
        <StatsCard 
          title="Active Products" 
          value={5} 
          icon={<Package size={20} />} 
          description="1 product expiring soon" 
          trend={{ value: 0, isPositive: true }}
          variant="accent"
        />
        <StatsCard 
          title="Connection Uptime" 
          value="99.8%" 
          icon={<Shield size={20} />} 
          description="Last 30 days" 
          trend={{ value: 0.2, isPositive: true }}
        />
      </div>
      
      {/* Bandwidth Chart */}
      <div>
        <BandwidthChart />
      </div>
      
      {/* World Map & Server Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <WorldMap />
        </div>
        <div className="space-y-6">
          <ServerStatus />
          <ProductsList />
        </div>
      </div>
      
      {/* Account Info, Network Tools, Announcements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <AccountInfo />
        </div>
        <div>
          <NetworkTools />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
