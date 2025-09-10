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
        url: "#",
        icon: TrendingUp,
      },
    ],
  },
  {
    title: "Inventory",
    items: [
      {
        title: "Products",
        url: "#",
        icon: Package,
      },
      {
        title: "Stock Levels",
        url: "#",
        icon: Archive,
      },
      {
        title: "Stock Alerts",
        url: "#",
        icon: AlertTriangle,
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Orders",
        url: "#",
        icon: ShoppingCart,
      },
      {
        title: "Warehouses",
        url: "#",
        icon: Warehouse,
      },
      {
        title: "Locations",
        url: "#",
        icon: MapPin,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Users",
        url: "#",
        icon: Users,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
  },
];

export function AppSidebar() {
  const handleNavigation = (url: string) => {
    if (url === "#") {
      // For demo purposes, show a message instead of navigating
      console.log("Feature coming soon!");
      return;
    }
    // For the dashboard route, we don't need to do anything as it's the current page
  };

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
                    <SidebarMenuButton 
                      onClick={() => handleNavigation(item.url)}
                      className={item.url === "/" ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                    >
                      <item.icon />
                      <span>{item.title}</span>
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