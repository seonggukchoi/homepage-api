import { NestFactory } from '@nestjs/core';
import * as config from 'config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(config.get<number>('application.port'));
}

bootstrap();
