import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useWarehouseStore } from '@/store/warehouseStore';

export function InventoryChart() {
  const { inventory } = useWarehouseStore();

  const chartData = inventory.map(item => ({
    name: item.product.name.substring(0, 10) + '...',
    current: item.quantity,
    minimum: item.minimumStock,
    maximum: item.maximumStock,
  }));

  const chartConfig = {
    current: {
      label: "Current Stock",
      color: "hsl(var(--warehouse-primary))",
    },
    minimum: {
      label: "Minimum Stock",
      color: "hsl(var(--status-critical))",
    },
    maximum: {
      label: "Maximum Stock",
      color: "hsl(var(--status-high))",
    },
  };

  return (
    <Card className="warehouse-card">
      <CardHeader>
        <CardTitle>Inventory Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="current" fill="var(--color-current)" radius={4} />
              <Bar dataKey="minimum" fill="var(--color-minimum)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}