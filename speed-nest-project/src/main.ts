import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'; // Change this line to use default import

const server = express(); // This should now work correctly

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    
    app.setGlobalPrefix('api');
    app.enableCors({ origin: true, credentials: true });
    await app.init();
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

bootstrap();

export default server;
