import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express'; // Import the ExpressAdapter
import * as express from 'express'; // Import Express

const app = express(); // Create an instance of Express

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(app)); // Use the ExpressAdapter
  nestApp.enableCors({ origin: true, credentials: true }); // Enable CORS
  await nestApp.init(); // Initialize the Nest application
}

// Start the Nest application
bootstrap();

// Export the app for Vercel serverless functions
export default app; // This line allows Vercel to access the app
