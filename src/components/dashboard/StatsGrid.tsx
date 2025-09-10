import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Warehouse, AlertTriangle, TrendingUp, DollarSign, ShoppingCart, Archive } from 'lucide-react';
import { useWarehouseStore } from '@/store/warehouseStore';

export function StatsGrid() {
  const { products, inventory, warehouses, stockAlerts } = useWarehouseStore();

  const totalProducts = products.length;
  const totalQuantity = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = inventory.filter(item => item.status === 'low-stock').length;
  const activeWarehouses = warehouses.filter(w => w.status === 'active').length;
  const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * item.product.price), 0);
  const unreadAlerts = stockAlerts.filter(alert => !alert.isRead).length;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts.toLocaleString(),
      icon: Package,
      description: "Active product lines",
      trend: "+12% from last month"
    },
    {
      title: "Total Inventory",
      value: totalQuantity.toLocaleString(),
      icon: Archive,
      description: "Items in stock",
      trend: "+8% from last week"
    },
    {
      title: "Inventory Value",
      value: `$${totalValue.toLocaleString()}`,
      icon: DollarSign,
      description: "Total stock value",
      trend: "+15% from last month"
    },
    {
      title: "Active Warehouses",
      value: activeWarehouses.toString(),
      icon: Warehouse,
      description: "Operational facilities",
      trend: "All systems operational"
    },
    {
      title: "Low Stock Items",
      value: lowStockItems.toString(),
      icon: AlertTriangle,
      description: "Items need restocking",
      trend: lowStockItems > 0 ? "Needs attention" : "All good",
      variant: lowStockItems > 0 ? "destructive" : "default"
    },
    {
      title: "Pending Alerts",
      value: unreadAlerts.toString(),
      icon: TrendingUp,
      description: "Unread notifications",
      trend: unreadAlerts > 0 ? "Requires review" : "Up to date",
      variant: unreadAlerts > 0 ? "warning" : "default"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="warehouse-stat">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            <p className={`text-xs mt-2 ${
              stat.variant === 'destructive' ? 'text-destructive' :
              stat.variant === 'warning' ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}