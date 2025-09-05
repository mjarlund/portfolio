import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

class RedisService {
	private client: ReturnType<typeof createClient> | null = null;
	private isConnected = false;
	private connectionPromise: Promise<ReturnType<typeof createClient>> | null = null;

	async connect() {
		if (this.isConnected && this.client) {
			return this.client;
		}

		// If a connection is already in progress, wait for it
		if (this.connectionPromise) {
			return this.connectionPromise;
		}

		// Create a new connection promise
		this.connectionPromise = this.createConnection();
		
		try {
			const client = await this.connectionPromise;
			this.connectionPromise = null; // Clear the promise once resolved
			return client;
		} catch (error) {
			this.connectionPromise = null; // Clear the promise on error
			throw error;
		}
	}

	private async createConnection() {
		try {
			this.client = createClient({
				url: REDIS_URL || 'redis://localhost:6379'
			});

			this.client.on('error', (err: unknown) => {
				console.error('Redis Client Error:', err);
				this.isConnected = false;
			});

			this.client.on('connect', () => {
				console.log('Redis client connected');
				this.isConnected = true;
			});

			await this.client.connect();
			return this.client;
		} catch (error) {
			console.error('Failed to connect to Redis:', error);
			this.client = null;
			this.isConnected = false;
			throw error;
		}
	}

	async get<T>(key: string): Promise<T | null> {
		try {
			const client = await this.ensureConnection();
			const data = await client.get(key);
			return data ? JSON.parse(data) : null;
		} catch (error) {
			console.error('Redis get error:', error);
			return null;
		}
	}

	async set(key: string, value: any, ttlSeconds: number = 3600): Promise<boolean> {
		try {
			const client = await this.ensureConnection();
			await client.setEx(key, ttlSeconds, JSON.stringify(value));
			return true;
		} catch (error) {
			console.error('Redis set error:', error);
			return false;
		}
	}

	async del(key: string): Promise<boolean> {
		try {
			const client = await this.ensureConnection();
			await client.del(key);
			return true;
		} catch (error) {
			console.error('Redis delete error:', error);
			return false;
		}
	}

	async exists(key: string): Promise<boolean> {
		try {
			const client = await this.ensureConnection();
			const result = await client.exists(key);
			return result === 1;
		} catch (error) {
			console.error('Redis exists error:', error);
			return false;
		}
	}

	private async ensureConnection() {
		if (!this.isConnected || !this.client) {
			await this.connect();
		}
		return this.client!;
	}

	async disconnect() {
		if (this.client && this.isConnected) {
			await this.client.quit();
			this.isConnected = false;
		}
	}
}

export const redisService = new RedisService();
