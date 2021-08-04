import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { SendMailProducerService } from 'src/jobs/sendMail-producer.service';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailService: SendMailProducerService) {}

  @Post()
  createUser(@Body() body: CreateUserDTO) {
    this.sendMailService.sendMail(body);
    return body;
  }
}
