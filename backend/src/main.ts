import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
const logger = new Logger('Main');
bootstrap()
  .then(() => {
    logger.log('Server is running!');
  })
  .catch((err) => {
    logger.error(err);
  });
