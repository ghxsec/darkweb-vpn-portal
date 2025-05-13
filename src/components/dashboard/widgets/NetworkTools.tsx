
import React, { useState } from 'react';
import { Network, Search } from 'lucide-react';

export function NetworkTools() {
  const [ipAddress, setIpAddress] = useState('192.168.1.1');
  const [hostname, setHostname] = useState('');
  const [result, setResult] = useState('');

  const handleCheckIP = () => {
    // In a real app, this would call an API
    setResult(`
      IP: ${ipAddress}
      Location: New York, USA
      ISP: Example Network
      Ping: 45ms
      Status: Active
    `);
  };

  const handleResolveHost = () => {
    // In a real app, this would call an API
    setResult(`
      Hostname: ${hostname}
      IP Address: 203.0.113.42
      DNS: Active
      Record Type: A
    `);
  };

  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md">
      <div className="mb-4 flex items-center gap-2">
        <Network size={18} className="text-vpn-primary" />
        <h3 className="text-lg font-medium text-vpn-foreground">Network Tools</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center mb-2">
            <h4 className="text-sm font-medium text-vpn-foreground">IP Lookup</h4>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="Enter IP address"
              className="flex-1 px-3 py-1.5 rounded bg-vpn-muted/30 border border-vpn-muted/30 text-vpn-foreground focus:outline-none focus:border-vpn-primary/50 text-sm"
            />
            <button 
              onClick={handleCheckIP}
              className="px-3 py-1.5 rounded bg-vpn-primary/20 text-vpn-primary hover:bg-vpn-primary/30 transition-colors text-sm flex items-center gap-1"
            >
              <Search size={14} />
              Check
            </button>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <h4 className="text-sm font-medium text-vpn-foreground">Host to IP</h4>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={hostname}
              onChange={(e) => setHostname(e.target.value)}
              placeholder="Enter hostname"
              className="flex-1 px-3 py-1.5 rounded bg-vpn-muted/30 border border-vpn-muted/30 text-vpn-foreground focus:outline-none focus:border-vpn-primary/50 text-sm"
            />
            <button 
              onClick={handleResolveHost}
              className="px-3 py-1.5 rounded bg-vpn-primary/20 text-vpn-primary hover:bg-vpn-primary/30 transition-colors text-sm flex items-center gap-1"
            >
              <Search size={14} />
              Resolve
            </button>
          </div>
        </div>
        
        {result && (
          <div className="mt-4">
            <div className="px-3 py-3 rounded bg-vpn-muted/20 text-vpn-foreground/90 font-mono text-xs whitespace-pre-line">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
