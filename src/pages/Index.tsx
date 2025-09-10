import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { InventoryChart } from '@/components/dashboard/InventoryChart';
import { StockAlerts } from '@/components/dashboard/StockAlerts';

const Index = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Warehouse Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor your inventory and warehouse operations in real-time
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <StatsGrid />

          {/* Charts and Alerts Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            <InventoryChart />
            <StockAlerts />
          </div>

          {/* Recent Activity */}
          <RecentActivity />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Index;