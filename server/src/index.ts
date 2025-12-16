import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './db/neon.js';
import { startBot, bot } from './bot/index.js';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://paketshop.uz'],
    credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Telegram webhook endpoint (for production)
app.post(`/bot${process.env.BOT_TOKEN}`, async (req, res) => {
    try {
        await bot.handleUpdate(req.body);
        res.sendStatus(200);
    } catch (error) {
        console.error('Webhook error:', error);
        res.sendStatus(500);
    }
});

// Start server
async function start() {
    try {
        // Initialize database
        if (process.env.DATABASE_URL) {
            await initDatabase();
        } else {
            console.log('⚠️ DATABASE_URL not set, skipping DB init');
        }

        // Start Telegram bot
        if (process.env.BOT_TOKEN) {
            await startBot();
        } else {
            console.log('⚠️ BOT_TOKEN not set, skipping bot');
        }

        // Start Express server
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`📡 API: http://localhost:${PORT}/api`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

start();
