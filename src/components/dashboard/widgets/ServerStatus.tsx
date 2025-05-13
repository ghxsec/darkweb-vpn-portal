
import React from 'react';
import { Server, CheckCircle, XCircle, Clock } from 'lucide-react';

interface ServerInfo {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance';
  uptime: string;
  load: number; // percentage
}

// Sample data
const servers: ServerInfo[] = [
  { id: 'server-1', name: 'VPN-NY-01', location: 'New York', status: 'online', uptime: '99.9%', load: 65 },
  { id: 'server-2', name: 'VPN-LDN-02', location: 'London', status: 'online', uptime: '99.7%', load: 78 },
  { id: 'server-3', name: 'VPN-TKY-01', location: 'Tokyo', status: 'online', uptime: '99.8%', load: 82 },
  { id: 'server-4', name: 'VPN-SYD-01', location: 'Sydney', status: 'online', uptime: '99.5%', load: 45 },
  { id: 'server-5', name: 'VPN-FRA-01', location: 'Frankfurt', status: 'maintenance', uptime: '95.2%', load: 30 },
  { id: 'server-6', name: 'VPN-SGP-01', location: 'Singapore', status: 'online', uptime: '99.6%', load: 72 },
  { id: 'server-7', name: 'VPN-DXB-01', location: 'Dubai', status: 'offline', uptime: '87.3%', load: 0 },
];

export function ServerStatus() {
  const getStatusIcon = (status: ServerInfo['status']) => {
    switch (status) {
      case 'online':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'offline':
        return <XCircle size={16} className="text-red-400" />;
      case 'maintenance':
        return <Clock size={16} className="text-yellow-400" />;
      default:
        return null;
    }
  };

  const getLoadColorClass = (load: number) => {
    if (load < 50) return 'bg-green-400';
    if (load < 80) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server size={18} className="text-vpn-primary" />
          <h3 className="text-lg font-medium text-vpn-foreground">Server Status</h3>
        </div>
        <span className="text-xs text-vpn-foreground/70 px-2 py-1 bg-vpn-muted/30 rounded-full">
          {servers.filter(s => s.status === 'online').length} / {servers.length} Online
        </span>
      </div>
      
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-vpn-foreground/70">
            <tr>
              <th className="py-2 text-left font-medium">Name</th>
              <th className="py-2 text-left font-medium">Location</th>
              <th className="py-2 text-left font-medium">Status</th>
              <th className="py-2 text-left font-medium">Uptime</th>
              <th className="py-2 text-left font-medium">Load</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vpn-muted/20">
            {servers.map((server) => (
              <tr key={server.id} className="text-vpn-foreground hover:bg-vpn-muted/10">
                <td className="py-2.5 font-medium">{server.name}</td>
                <td className="py-2.5">{server.location}</td>
                <td className="py-2.5">
                  <div className="flex items-center gap-1.5">
                    {getStatusIcon(server.status)}
                    <span className="capitalize">{server.status}</span>
                  </div>
                </td>
                <td className="py-2.5">{server.uptime}</td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-vpn-muted/30 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getLoadColorClass(server.load)}`} 
                        style={{ width: `${server.load}%` }}
                      ></div>
                    </div>
                    <span>{server.load}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
