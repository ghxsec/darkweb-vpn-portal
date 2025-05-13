
import React from 'react';
import { Package, CheckCircle, AlertCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  type: 'VPN' | 'Tunnel' | 'Server';
  status: 'active' | 'inactive' | 'expiring';
  expiresAt: string;
  stock: number;
  totalStock: number;
}

// Sample data
const products: Product[] = [
  { id: 'prod-1', name: 'Premium VPN', type: 'VPN', status: 'active', expiresAt: '2025-06-15', stock: 873, totalStock: 1000 },
  { id: 'prod-2', name: 'Secure Tunnel Pro', type: 'Tunnel', status: 'active', expiresAt: '2025-08-22', stock: 642, totalStock: 1000 },
  { id: 'prod-3', name: 'Dedicated Server S1', type: 'Server', status: 'expiring', expiresAt: '2025-05-30', stock: 28, totalStock: 50 },
  { id: 'prod-4', name: 'Gaming VPN Package', type: 'VPN', status: 'active', expiresAt: '2025-09-10', stock: 123, totalStock: 200 },
  { id: 'prod-5', name: 'Business Tunnel', type: 'Tunnel', status: 'inactive', expiresAt: '2025-01-15', stock: 0, totalStock: 100 },
];

export function ProductsList() {
  const getStatusIcon = (status: Product['status']) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'inactive':
        return <AlertCircle size={16} className="text-red-400" />;
      case 'expiring':
        return <AlertCircle size={16} className="text-yellow-400" />;
      default:
        return null;
    }
  };

  const getStockColorClass = (stock: number, total: number) => {
    const percentage = (stock / total) * 100;
    if (percentage === 0) return 'bg-red-400';
    if (percentage < 30) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <div className="rounded-xl border border-vpn-muted/30 bg-[#111827]/60 p-4 backdrop-blur-sm shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package size={18} className="text-vpn-primary" />
          <h3 className="text-lg font-medium text-vpn-foreground">Products & Services</h3>
        </div>
        <button className="px-2.5 py-1 text-xs rounded-full bg-vpn-primary/20 text-vpn-primary hover:bg-vpn-primary/30 transition-colors duration-200">
          + Add New
        </button>
      </div>
      
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-vpn-foreground/70">
            <tr>
              <th className="py-2 text-left font-medium">Name</th>
              <th className="py-2 text-left font-medium">Type</th>
              <th className="py-2 text-left font-medium">Status</th>
              <th className="py-2 text-left font-medium">Expires</th>
              <th className="py-2 text-left font-medium">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vpn-muted/20">
            {products.map((product) => (
              <tr key={product.id} className="text-vpn-foreground hover:bg-vpn-muted/10">
                <td className="py-2.5 font-medium">{product.name}</td>
                <td className="py-2.5">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-vpn-muted/30">
                    {product.type}
                  </span>
                </td>
                <td className="py-2.5">
                  <div className="flex items-center gap-1.5">
                    {getStatusIcon(product.status)}
                    <span className="capitalize">{product.status}</span>
                  </div>
                </td>
                <td className="py-2.5">{new Date(product.expiresAt).toLocaleDateString()}</td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-vpn-muted/30 rounded-full overflow-hidden">
                      <div 
                        className={getStockColorClass(product.stock, product.totalStock)} 
                        style={{ width: `${(product.stock / product.totalStock) * 100}%` }}
                      ></div>
                    </div>
                    <span>{product.stock}/{product.totalStock}</span>
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
