export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  price: number;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  status: 'active' | 'inactive' | 'discontinued';
  createdAt: string;
  updatedAt: string;
}

export interface InventoryItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  minimumStock: number;
  maximumStock: number;
  location: string;
  warehouse: string;
  lastUpdated: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock' | 'overstocked';
}

export interface Warehouse {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  capacity: number;
  usedCapacity: number;
  status: 'active' | 'inactive' | 'maintenance';
  manager: string;
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  orderDate: string;
  shippingDate?: string;
  deliveryDate?: string;
  totalAmount: number;
  shippingAddress: Address;
  warehouseId: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Movement {
  id: string;
  type: 'inbound' | 'outbound' | 'transfer' | 'adjustment';
  productId: string;
  product: Product;
  quantity: number;
  fromLocation?: string;
  toLocation?: string;
  warehouseId: string;
  reason: string;
  createdBy: string;
  createdAt: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface StockAlert {
  id: string;
  type: 'low-stock' | 'out-of-stock' | 'overstocked' | 'expired';
  productId: string;
  product: Product;
  currentQuantity: number;
  threshold: number;
  warehouseId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  isRead: boolean;
  createdAt: string;
}