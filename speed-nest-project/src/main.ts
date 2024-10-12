// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors({
//     origin: 'https://speed-vercel-ehmmzquy9-roccos-projects-5f59ad15.vercel.app', 
//     methods: 'GET,POST,PUT,DELETE', 
//     allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
//     credentials: true, 
//   });
//   const port = process.env.PORT || 8082;
//   await app.listen(port, () => console.log(`Server running on port ${port}`));
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose'; // Import connect directly

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Test MongoDB Connection
  try {
    const connection = await connect("mongodb+srv://rocco:mcY9ItydBZONj0Nu@clusterspeed.y8tg4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSPEED"); // Use the connect method directly
    console.log('Connected to MongoDB:', connection.connection.name); // Log the name of the database
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message); // Log connection error
  }

  app.enableCors({ origin: true, credentials: true });
  const port = process.env.PORT || 8082;

  await app.listen(port);
  console.log('Nest application is running on: http://localhost:8082');
}

bootstrap();