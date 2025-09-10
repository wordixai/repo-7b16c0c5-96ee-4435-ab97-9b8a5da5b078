import {
  Package,
  Warehouse,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  Users,
  Settings,
  BarChart3,
  MapPin,
  Archive,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: BarChart3,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: TrendingUp,
      },
    ],
  },
  {
    title: "Inventory",
    items: [
      {
        title: "Products",
        url: "/products",
        icon: Package,
      },
      {
        title: "Stock Levels",
        url: "/inventory",
        icon: Archive,
      },
      {
        title: "Stock Alerts",
        url: "/alerts",
        icon: AlertTriangle,
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCart,
      },
      {
        title: "Warehouses",
        url: "/warehouses",
        icon: Warehouse,
      },
      {
        title: "Locations",
        url: "/locations",
        icon: MapPin,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Users",
        url: "/users",
        icon: Users,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-2 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <Package className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">WarehouseOS</h2>
            <p className="text-xs text-sidebar-foreground/70">Inventory Management</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4 text-xs text-sidebar-foreground/70">
          © 2024 WarehouseOS
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}