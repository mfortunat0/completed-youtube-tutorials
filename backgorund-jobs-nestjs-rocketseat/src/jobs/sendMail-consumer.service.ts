import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { CreateUserDTO } from 'src/create-user/create-user.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('sendMail-Queue')
export class SendMailConsumerService {
  constructor(private mailerService: MailerService) {}

  @Process('sendMail-Job')
  async sendMailJob(job: Job<CreateUserDTO>) {
    const { data } = job;
    await this.mailerService.sendMail({
      to: data.email,
      from: 'matheus.xmaz10@gmail.com',
      subject: 'Seja bem vindo',
      text: `Ola ${data.name}, seu cadastro foi feito com sucesso!!`,
    });
  }
}
