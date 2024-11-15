import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3100);
  app.enableC
  origin: '*' //'http://localhostors({:8081',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});

}
bootstrap();
