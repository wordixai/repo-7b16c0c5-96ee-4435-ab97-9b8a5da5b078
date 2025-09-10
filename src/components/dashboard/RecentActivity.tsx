import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

const recentActivities = [
  {
    id: '1',
    type: 'stock_in',
    description: 'Received 100 units of Wireless Headphones',
    timestamp: '2 hours ago',
    icon: TrendingUp,
    variant: 'success'
  },
  {
    id: '2',
    type: 'stock_out',
    description: 'Shipped 25 units of Gaming Mouse',
    timestamp: '4 hours ago',
    icon: TrendingDown,
    variant: 'default'
  },
  {
    id: '3',
    type: 'alert',
    description: 'Low stock alert for Gaming Mouse',
    timestamp: '6 hours ago',
    icon: AlertTriangle,
    variant: 'warning'
  },
  {
    id: '4',
    type: 'new_product',
    description: 'Added new product: Laptop Stand',
    timestamp: '1 day ago',
    icon: Package,
    variant: 'secondary'
  },
  {
    id: '5',
    type: 'stock_in',
    description: 'Received 50 units of Laptop Stand',
    timestamp: '1 day ago',
    icon: TrendingUp,
    variant: 'success'
  }
];

export function RecentActivity() {
  return (
    <Card className="warehouse-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${
                activity.variant === 'success' ? 'bg-green-100 text-green-600' :
                activity.variant === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                activity.variant === 'secondary' ? 'bg-blue-100 text-blue-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
              <Badge variant={activity.variant as any}>
                {activity.type.replace('_', ' ')}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}