import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class UsersService {
  constructor(@Inject("USER_SERVICE") private client: ClientProxy) {}
  findAll() {
    return this.client.send("user.all", {});
  }
  findOneUser(id: number) {
    return this.client.send("user.one", id);
  }
  createUser(user: { name: string; age: number }) {
    return this.client.send("user.create", user);
  }
  updateUser(id: number, user: { name: string; age: number }) {
    return this.client.send("user.update", { id, ...user });
  }
  deleteUser(id: number) {
    return this.client.send("user.delete", id);
  }
}
