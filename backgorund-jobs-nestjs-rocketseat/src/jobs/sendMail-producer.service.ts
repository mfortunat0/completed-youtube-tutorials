import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/create-user/create-user.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class SendMailProducerService {
  constructor(
    @InjectQueue('sendMail-Queue')
    private queue: Queue,
  ) {}
  async sendMail(createUserDto: CreateUserDTO) {
    await this.queue.add('sendMail-Job', createUserDto);
  }
}
