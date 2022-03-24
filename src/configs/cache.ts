
import { CacheConfig } from '../@types';

const cache: CacheConfig = {
	config: {
		redis: {
			host: process.env.REDIS_HOST,
			port: Number(process.env.REDIS_PORT),
			password: process.env.REDI_PASSWORD || undefined,
		},
	},
	driver: 'redis',
};

export default cache;
