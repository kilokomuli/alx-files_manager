import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import { ObjectID } from 'mongodb';
import mime from 'mime-types';
import Queue from 'bull';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';

const fileQueue = new Queue('fileQueue', 
{
  redis:{
    host: process.env.REDIS_HOST || '127.0.0.1:6379',
    port: process.env.REDIS_PORT || 6379,
  }

}
)
