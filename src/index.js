import dotenv from 'dotenv';
import setupServer from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';


dotenv.config()

async function start() {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error('Failed to start app:', error);
  }
}

start();
