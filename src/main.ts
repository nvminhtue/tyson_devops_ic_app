import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

dotenvConfig();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
