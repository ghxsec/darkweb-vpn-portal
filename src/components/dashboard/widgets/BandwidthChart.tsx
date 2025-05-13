
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', download: 65, upload: 35 },
  { name: '04:00', download: 78, upload: 42 },
  { name: '08:00', download: 120, upload: 76 },
  { name: '12:00', download: 165, upload: 89 },
  { name: '16:00', download: 198, upload: 105 },
  { name: '20:00', download: 133, upload: 72 },
  { name: '24:00', download: 80, upload: 45 },
];

export function BandwidthChart() {
  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-vpn-foreground">Bandwidth Usage (24h)</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-vpn-primary mr-2"></div>
            <span className="text-xs text-vpn-foreground/70">Download</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-vpn-secondary mr-2"></div>
            <span className="text-xs text-vpn-foreground/70">Upload</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FFAA" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00FFAA" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9945FF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#9945FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#E2E8F0', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#E2E8F0', fontSize: 12 }}
              tickFormatter={(value) => `${value} MB`}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#273444" vertical={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#111827', 
                borderColor: '#273444',
                color: '#E2E8F0',
                fontSize: 12,
                borderRadius: 8
              }}
            />
            <Area 
              type="monotone" 
              dataKey="download" 
              stroke="#00FFAA" 
              fillOpacity={1}
              fill="url(#colorDownload)" 
            />
            <Area 
              type="monotone" 
              dataKey="upload" 
              stroke="#9945FF" 
              fillOpacity={1}
              fill="url(#colorUpload)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
