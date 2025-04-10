import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly service: UserService) {}
  @MessagePattern("user.all")
  findAll() {
    return this.service.findAll();
  }

  @MessagePattern("user.one")
  findOne(@Payload() id: number) {
    return this.service.findOne(id);
  }

  @MessagePattern("user.create")
  create(@Payload() payload: { name: string; age: number }) {
    return this.service.create(payload);
  }

  @MessagePattern("user.update")
  update(@Payload() data: { id: number; name: string; age: number }) {
    return this.service.update(data.id, { name: data.name, age: data.age });
  }
  
  @MessagePattern("user.delete")
  delete(@Payload() id: number) {
    return this.service.delete(id);
  }
}
