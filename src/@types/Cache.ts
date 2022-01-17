import { RedisOptions } from "ioredis";

export interface CacheConfig {
	config: {
		redis: RedisOptions,
	},
	driver: string,
}
