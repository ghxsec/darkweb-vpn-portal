
import React from 'react';
import { Bell } from 'lucide-react';

// Define announcement data type
interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  type: 'info' | 'warning' | 'maintenance';
}

// Sample data
const announcements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'New Servers Added',
    date: '2 days ago',
    content: 'We have added 3 new servers in Asia. Get better connection speeds with our expanded network!',
    type: 'info',
  },
  {
    id: 'ann-2',
    title: 'Scheduled Maintenance',
    date: '5 days ago',
    content: 'Maintenance scheduled for Frankfurt servers on May 15, 2025. Expect brief service interruptions.',
    type: 'maintenance',
  },
  {
    id: 'ann-3',
    title: 'Security Update',
    date: '1 week ago',
    content: 'Important security updates have been applied to all servers. No action required.',
    type: 'warning',
  },
];

export function Announcements() {
  const getAnnouncementTypeStyles = (type: Announcement['type']) => {
    switch (type) {
      case 'info':
        return 'border-l-vpn-primary bg-vpn-primary/5';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-500/5';
      case 'maintenance':
        return 'border-l-vpn-secondary bg-vpn-secondary/5';
      default:
        return 'border-l-vpn-muted bg-vpn-muted/5';
    }
  };

  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell size={18} className="text-vpn-primary" />
          <h3 className="text-lg font-medium text-vpn-foreground">Announcements</h3>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full bg-vpn-muted/30 text-vpn-foreground/70">
          {announcements.length} New
        </span>
      </div>
      
      <div className="space-y-3">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id} 
            className={`rounded-md border-l-4 p-3 ${getAnnouncementTypeStyles(announcement.type)}`}
          >
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-vpn-foreground">{announcement.title}</h4>
              <span className="text-xs text-vpn-foreground/60">{announcement.date}</span>
            </div>
            <p className="text-sm text-vpn-foreground/80">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
