import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose'; // Import connect directly

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Test MongoDB Connection
  try {
    const connection = await connect(process.env.DB_URI); // Use the connect method directly
    console.log('Connected to MongoDB:', connection.connection.name); // Log the name of the database
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message); // Log connection error!
  }

  app.enableCors({ origin: true, credentials: true });
  const port = process.env.PORT || 8082;

  await app.listen(port);
  console.log('Nest application is running on: http://localhost:8082');
}

bootstrap();