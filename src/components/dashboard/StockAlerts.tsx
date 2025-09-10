import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Package, CheckCircle } from 'lucide-react';
import { useWarehouseStore } from '@/store/warehouseStore';

export function StockAlerts() {
  const { stockAlerts, markAlertAsRead } = useWarehouseStore();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'high':
        return AlertTriangle;
      case 'medium':
        return Package;
      default:
        return CheckCircle;
    }
  };

  return (
    <Card className="warehouse-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Stock Alerts
          <Badge variant="destructive" className="ml-2">
            {stockAlerts.filter(alert => !alert.isRead).length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stockAlerts.length === 0 ? (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <p className="text-muted-foreground">No alerts at this time</p>
            </div>
          ) : (
            stockAlerts.map((alert) => {
              const SeverityIcon = getSeverityIcon(alert.severity);
              return (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)} ${
                    !alert.isRead ? 'border-l-4' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <SeverityIcon className="h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{alert.product.name}</h4>
                        <p className="text-sm opacity-80">{alert.message}</p>
                        <p className="text-xs opacity-60 mt-1">
                          Current: {alert.currentQuantity} | Threshold: {alert.threshold}
                        </p>
                      </div>
                    </div>
                    {!alert.isRead && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => markAlertAsRead(alert.id)}
                      >
                        Mark Read
                      </Button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}