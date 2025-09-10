import { create } from 'zustand';
import { Product, InventoryItem, Warehouse, Order, Movement, StockAlert } from '@/types/warehouse';

interface WarehouseStore {
  // Products
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Inventory
  inventory: InventoryItem[];
  setInventory: (inventory: InventoryItem[]) => void;
  updateInventoryItem: (id: string, item: Partial<InventoryItem>) => void;
  
  // Warehouses
  warehouses: Warehouse[];
  setWarehouses: (warehouses: Warehouse[]) => void;
  addWarehouse: (warehouse: Warehouse) => void;
  updateWarehouse: (id: string, warehouse: Partial<Warehouse>) => void;
  
  // Orders
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  updateOrder: (id: string, order: Partial<Order>) => void;
  
  // Movements
  movements: Movement[];
  setMovements: (movements: Movement[]) => void;
  addMovement: (movement: Movement) => void;
  
  // Stock Alerts
  stockAlerts: StockAlert[];
  setStockAlerts: (alerts: StockAlert[]) => void;
  markAlertAsRead: (id: string) => void;
  
  // UI State
  selectedWarehouse: string | null;
  setSelectedWarehouse: (id: string | null) => void;
}

// Mock data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    sku: 'WH-001',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    weight: 0.3,
    dimensions: { length: 20, width: 18, height: 8 },
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Gaming Mouse',
    sku: 'GM-002',
    category: 'Electronics',
    description: 'Ergonomic gaming mouse with RGB lighting',
    price: 79.99,
    weight: 0.15,
    dimensions: { length: 12, width: 7, height: 4 },
    status: 'active',
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
  },
  {
    id: '3',
    name: 'Laptop Stand',
    sku: 'LS-003',
    category: 'Accessories',
    description: 'Adjustable aluminum laptop stand',
    price: 49.99,
    weight: 0.8,
    dimensions: { length: 30, width: 25, height: 5 },
    status: 'active',
    createdAt: '2024-01-17T10:00:00Z',
    updatedAt: '2024-01-17T10:00:00Z',
  },
];

const mockWarehouses: Warehouse[] = [
  {
    id: '1',
    name: 'Main Warehouse',
    address: '123 Industrial Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210',
    country: 'USA',
    capacity: 100000,
    usedCapacity: 75000,
    status: 'active',
    manager: 'John Smith',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'East Coast Hub',
    address: '456 Logistics Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    capacity: 80000,
    usedCapacity: 60000,
    status: 'active',
    manager: 'Sarah Johnson',
    createdAt: '2024-01-01T00:00:00Z',
  },
];

export const useWarehouseStore = create<WarehouseStore>((set, get) => ({
  // Products
  products: mockProducts,
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  updateProduct: (id, product) => set((state) => ({
    products: state.products.map((p) => p.id === id ? { ...p, ...product } : p)
  })),
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter((p) => p.id !== id)
  })),
  
  // Inventory
  inventory: mockProducts.map((product, index) => ({
    id: `inv-${product.id}`,
    productId: product.id,
    product,
    quantity: [150, 45, 230][index] || 100,
    reservedQuantity: [20, 5, 30][index] || 10,
    availableQuantity: [130, 40, 200][index] || 90,
    minimumStock: [50, 20, 100][index] || 50,
    maximumStock: [500, 200, 1000][index] || 500,
    location: [`A-${index + 1}-${index + 1}`, `B-${index + 1}-${index + 1}`, `C-${index + 1}-${index + 1}`][index] || 'A-1-1',
    warehouse: mockWarehouses[index % 2].id,
    lastUpdated: new Date().toISOString(),
    status: index === 1 ? 'low-stock' : 'in-stock',
  })),
  setInventory: (inventory) => set({ inventory }),
  updateInventoryItem: (id, item) => set((state) => ({
    inventory: state.inventory.map((i) => i.id === id ? { ...i, ...item } : i)
  })),
  
  // Warehouses
  warehouses: mockWarehouses,
  setWarehouses: (warehouses) => set({ warehouses }),
  addWarehouse: (warehouse) => set((state) => ({ warehouses: [...state.warehouses, warehouse] })),
  updateWarehouse: (id, warehouse) => set((state) => ({
    warehouses: state.warehouses.map((w) => w.id === id ? { ...w, ...warehouse } : w)
  })),
  
  // Orders
  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  updateOrder: (id, order) => set((state) => ({
    orders: state.orders.map((o) => o.id === id ? { ...o, ...order } : o)
  })),
  
  // Movements
  movements: [],
  setMovements: (movements) => set({ movements }),
  addMovement: (movement) => set((state) => ({ movements: [...state.movements, movement] })),
  
  // Stock Alerts
  stockAlerts: [
    {
      id: '1',
      type: 'low-stock',
      productId: '2',
      product: mockProducts[1],
      currentQuantity: 45,
      threshold: 50,
      warehouseId: '1',
      severity: 'medium',
      message: 'Gaming Mouse stock is running low',
      isRead: false,
      createdAt: new Date().toISOString(),
    },
  ],
  setStockAlerts: (stockAlerts) => set({ stockAlerts }),
  markAlertAsRead: (id) => set((state) => ({
    stockAlerts: state.stockAlerts.map((alert) => 
      alert.id === id ? { ...alert, isRead: true } : alert
    )
  })),
  
  // UI State
  selectedWarehouse: null,
  setSelectedWarehouse: (selectedWarehouse) => set({ selectedWarehouse }),
}));