import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);

// Initialize database tables
export async function initDatabase() {
    await sql`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      price INTEGER NOT NULL,
      images TEXT[] DEFAULT '{}',
      category TEXT NOT NULL,
      popular BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

    await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      items JSONB NOT NULL,
      total INTEGER NOT NULL,
      status TEXT DEFAULT 'new',
      address TEXT,
      phone TEXT NOT NULL,
      customer_name TEXT,
      payment_method TEXT DEFAULT 'cash',
      comment TEXT,
      telegram_id BIGINT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

    await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      telegram_id BIGINT UNIQUE,
      phone TEXT,
      name TEXT,
      addresses JSONB DEFAULT '[]',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

    console.log('✅ Database tables initialized');
}

// Products
export async function getProducts() {
    return await sql`SELECT * FROM products ORDER BY popular DESC, created_at DESC`;
}

export async function getProductById(id: string) {
    const result = await sql`SELECT * FROM products WHERE id = ${id}`;
    return result[0];
}

export async function createProduct(product: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    popular?: boolean;
}) {
    await sql`
    INSERT INTO products (id, name, description, price, images, category, popular)
    VALUES (${product.id}, ${product.name}, ${product.description}, ${product.price}, ${product.images}, ${product.category}, ${product.popular || false})
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      description = EXCLUDED.description,
      price = EXCLUDED.price,
      images = EXCLUDED.images,
      category = EXCLUDED.category,
      popular = EXCLUDED.popular
  `;
}

// Orders
export async function createOrder(order: {
    id: string;
    items: any[];
    total: number;
    address: string;
    phone: string;
    customerName?: string;
    paymentMethod: string;
    comment?: string;
    telegramId?: number;
}) {
    await sql`
    INSERT INTO orders (id, items, total, address, phone, customer_name, payment_method, comment, telegram_id)
    VALUES (${order.id}, ${JSON.stringify(order.items)}, ${order.total}, ${order.address}, ${order.phone}, ${order.customerName}, ${order.paymentMethod}, ${order.comment || ''}, ${order.telegramId || null})
  `;
    return order;
}

export async function getOrdersByPhone(phone: string) {
    return await sql`SELECT * FROM orders WHERE phone = ${phone} ORDER BY created_at DESC`;
}

export async function getAllOrders() {
    return await sql`SELECT * FROM orders ORDER BY created_at DESC LIMIT 100`;
}

export async function updateOrderStatus(id: string, status: string) {
    await sql`UPDATE orders SET status = ${status} WHERE id = ${id}`;
}

// Users
export async function getUserByTelegramId(telegramId: number) {
    const result = await sql`SELECT * FROM users WHERE telegram_id = ${telegramId}`;
    return result[0];
}

export async function createOrUpdateUser(user: {
    telegramId: number;
    phone?: string;
    name?: string;
}) {
    await sql`
    INSERT INTO users (telegram_id, phone, name)
    VALUES (${user.telegramId}, ${user.phone || null}, ${user.name || null})
    ON CONFLICT (telegram_id) DO UPDATE SET
      phone = COALESCE(EXCLUDED.phone, users.phone),
      name = COALESCE(EXCLUDED.name, users.name)
  `;
}

export { sql };
