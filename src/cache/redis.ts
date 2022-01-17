import Redis, { Redis as RedisClient } from 'ioredis';
import { promisify } from 'util';

const redisClient = new Redis();

const getRedis = async (key: string) => {
	const syncRedisGet = promisify(redisClient.get).bind(redisClient);
	console.log(key);
}

const setRedis = async (key: string, value: string) => {
	const syncRedisSet = promisify(redisClient.set).bind(redisClient);
	console.log(key, value);
}

export default { getRedis, setRedis };
