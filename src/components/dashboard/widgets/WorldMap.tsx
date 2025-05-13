
import React from 'react';
import { MapPin } from 'lucide-react';

// Define types for server locations
interface ServerLocation {
  id: number;
  city: string;
  country: string;
  status: 'online' | 'offline' | 'maintenance';
  position: {
    top: string;
    left: string;
  };
  load: number; // Server load percentage
}

// Sample data for server locations
const serverLocations: ServerLocation[] = [
  { id: 1, city: 'New York', country: 'USA', status: 'online', position: { top: '40%', left: '25%' }, load: 65 },
  { id: 2, city: 'London', country: 'UK', status: 'online', position: { top: '35%', left: '45%' }, load: 78 },
  { id: 3, city: 'Tokyo', country: 'Japan', status: 'online', position: { top: '42%', left: '82%' }, load: 82 },
  { id: 4, city: 'Sydney', country: 'Australia', status: 'online', position: { top: '75%', left: '85%' }, load: 45 },
  { id: 5, city: 'São Paulo', country: 'Brazil', status: 'online', position: { top: '65%', left: '32%' }, load: 58 },
  { id: 6, city: 'Frankfurt', country: 'Germany', status: 'maintenance', position: { top: '38%', left: '50%' }, load: 30 },
  { id: 7, city: 'Singapore', country: 'Singapore', status: 'online', position: { top: '55%', left: '75%' }, load: 72 },
  { id: 8, city: 'Dubai', country: 'UAE', status: 'offline', position: { top: '48%', left: '60%' }, load: 0 },
];

export function WorldMap() {
  const getStatusColor = (status: ServerLocation['status']) => {
    switch (status) {
      case 'online':
        return 'text-green-400';
      case 'offline':
        return 'text-red-400';
      case 'maintenance':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusClass = (status: ServerLocation['status']) => {
    switch (status) {
      case 'online':
        return 'animate-pulse-glow';
      case 'offline':
        return 'opacity-50';
      case 'maintenance':
        return 'animate-pulse';
      default:
        return '';
    }
  };

  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md h-full">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-vpn-foreground">Worldwide Server Network</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-400 mr-1.5"></div>
            <span className="text-xs text-vpn-foreground/70">Online</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-400 mr-1.5"></div>
            <span className="text-xs text-vpn-foreground/70">Maintenance</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-red-400 mr-1.5"></div>
            <span className="text-xs text-vpn-foreground/70">Offline</span>
          </div>
        </div>
      </div>
      
      <div className="relative h-[400px] w-full overflow-hidden">
        {/* World map image (simple SVG outline) */}
        <div className="absolute inset-0 opacity-20 border border-vpn-muted/20 rounded-lg">
          <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M181.9,93.2c-0.3,2.6-0.4,5.3-0.4,8c0,35.6,28.8,64.4,64.4,64.4c17.5,0,33.5-7,45.1-18.4c11.6,11.4,27.5,18.4,45.1,18.4 c35.6,0,64.4-28.8,64.4-64.4c0-2.7-0.2-5.4-0.5-8H181.9z M63.4,172.7c9.8,0,19-2.8,26.8-7.7c14.5,17.5,36.5,28.6,60.9,28.6 c32.8,0,60.7-19.9,72.5-48.3c11.9,28.4,39.8,48.3,72.5,48.3c24.5,0,46.4-11.2,60.9-28.6c7.8,4.9,17,7.7,26.8,7.7 c8.7,0,16.9-2.2,24-6.1v89.7c-7.1-3.9-15.3-6.1-24-6.1c-17,0-32.1,8.5-41.2,21.5c-9-13-24.2-21.5-41.2-21.5 c-17,0-32.1,8.5-41.2,21.5c-9-13-24.2-21.5-41.2-21.5s-32.1,8.5-41.2,21.5c-9-13-24.2-21.5-41.2-21.5c-8.7,0-16.9,2.2-24,6.1v-89.7 C46.5,170.4,54.7,172.7,63.4,172.7z M63.4,277.1c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S35.8,277.1,63.4,277.1z M841.6,204.4c-24.3,0-46.2,10.9-60.9,28.1c-14.7-17.1-36.6-28.1-60.9-28.1c-44.7,0-80.9,36.2-80.9,80.9 c0,10.4,2,20.4,5.6,29.6h272.6c3.6-9.2,5.6-19.2,5.6-29.6C922.6,240.6,886.3,204.4,841.6,204.4z M151.3,337.3 c27.6,0,50,22.4,50,50c0,26.2-20.2,47.7-45.8,49.8c-6.6-12.9-16.2-23.9-27.9-32c3.1-5.2,4.9-11.2,4.9-17.7c0-19-15.4-34.4-34.4-34.4 c-15.5,0-28.5,10.2-32.8,24.2c-7-1.3-14.2-2-21.6-2c-14.3,0-28,2.5-40.7,7.2c-0.5-5.1-0.8-10.3-0.8-15.6 C2.1,378.2,33,347.3,70.9,337.3H151.3z M366.3,337.3c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S338.7,337.3,366.3,337.3z M571.3,367.1c-6.5,0-12.7,1.5-18.2,4.3c-4.7-17.6-20.7-30.6-39.9-30.6c-19.2,0-35.3,13-39.9,30.6c-5.5-2.7-11.7-4.3-18.2-4.3 c-17.3,0-32.1,10.7-38.2,25.8h-75.1c-4.3-18.2-20.7-31.8-40.4-31.8c-22.9,0-41.4,18.6-41.4,41.4s18.6,41.4,41.4,41.4 c19.7,0,36.1-13.6,40.4-31.8h51.2c-4.5,9.1-7.1,19.4-7.1,30.2c0,37.7,30.6,68.3,68.3,68.3c31.9,0,58.7-21.9,66.3-51.5 c7.3,4.7,16,7.4,25.3,7.4c25.9,0,46.9-21,46.9-46.9S597.2,367.1,571.3,367.1z M841.6,367.1c33.1,0,60.6,23.1,67.6,54.1H774 c7-31,34.5-54.1,67.6-54.1z M702.8,454.1h24.2c6.1,18.8,16.8,35.3,30.8,47.9c-17.5,8.5-37.1,13.3-57.8,13.3 c-73.2,0-132.7-59.5-132.7-132.7S626.8,250,700,250c19.5,0,38,4.2,54.7,11.8c-13,12.3-22.9,28.1-28.6,45.9h-23.3V454.1z M841.6,454.1 c22.3,0,42.7,8,58.4,21.2c-16.8,16.7-39.9,27-65.4,27h-62.4c16.2-28.9,47.2-48.2,82.7-48.2H841.6z" 
              fill="#9945FF" 
              opacity="0.5"
            />
          </svg>
        </div>
        
        {/* Location pins */}
        {serverLocations.map((location) => (
          <div 
            key={location.id}
            className={`absolute cursor-pointer flex flex-col items-center ${getStatusClass(location.status)}`}
            style={{ top: location.position.top, left: location.position.left }}
          >
            <MapPin className={`${getStatusColor(location.status)}`} size={24} />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-vpn-background/90 backdrop-blur-sm text-xs px-2 py-1 rounded border border-vpn-muted/30 shadow-lg w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              <div className="font-medium">{location.city}, {location.country}</div>
              <div className="flex justify-between mt-1">
                <span>Status:</span>
                <span className={getStatusColor(location.status)}>{location.status}</span>
              </div>
              <div className="flex justify-between mt-0.5">
                <span>Load:</span>
                <span>{location.load}%</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Connection lines (simplified) */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFAA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9945FF" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path 
            d="M250,200 C350,100 650,300 750,200" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="4,4"
          />
          <path 
            d="M150,200 C250,300 350,150 450,250" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="4,4"
          />
          <path 
            d="M450,250 C550,300 650,150 750,200" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="4,4"
          />
        </svg>
      </div>
    </div>
  );
}
