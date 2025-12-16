// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002/api';

// Helper function
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}

// Products API
export const productsAPI = {
    getAll: () => fetchAPI<Product[]>('/products'),
    getById: (id: string) => fetchAPI<Product>(`/products/${id}`),
};

// Orders API
export const ordersAPI = {
    create: (order: CreateOrderDTO) =>
        fetchAPI<{ success: boolean; orderId: string }>('/orders', {
            method: 'POST',
            body: JSON.stringify(order),
        }),

    getByPhone: (phone: string) =>
        fetchAPI<Order[]>(`/orders?phone=${encodeURIComponent(phone)}`),
};

// Types
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    popular?: boolean;
}

interface Order {
    id: string;
    items: any[];
    total: number;
    status: string;
    address: string;
    phone: string;
    createdAt: string;
}

interface CreateOrderDTO {
    items: any[];
    total: number;
    address: string;
    phone: string;
    customerName?: string;
    paymentMethod: string;
    comment?: string;
    telegramId?: number;
}

export { API_URL };
