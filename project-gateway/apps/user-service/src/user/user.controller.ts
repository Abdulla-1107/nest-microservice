import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @MessagePattern('user.all')
  findAll() {
    return this.service.findAll();
  }
}
