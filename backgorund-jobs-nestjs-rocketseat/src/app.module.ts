import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';
import { BullModule } from '@nestjs/bull';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { SendMailProducerService } from './jobs/sendMail-producer.service';
import { SendMailConsumerService } from './jobs/sendMail-consumer.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'database',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'sendMail-Queue',
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
  ],
  controllers: [CreateUserController],
  providers: [SendMailProducerService, SendMailConsumerService],
})
export class AppModule {}
