import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express(); // Create an instance of Express

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server)); // Use ExpressAdapter
  app.enableCors({ origin: true, credentials: true }); // Enable CORS
  await app.init(); // Initialize the Nest application
}

bootstrap();

// Export the Express server as the default export for Vercel
export default server;
