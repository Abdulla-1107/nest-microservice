import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class BookService {
  constructor(@Inject("BOOK_SERVICE") private client: ClientProxy) {}
  findAll() {
    return this.client.send("book.all", {});
  }
  findOnebook(id: number) {
    return this.client.send("book.one", id);
  }
  createbook(book: { name: string }) {
    return this.client.send("book.create", book);
  }
  updatebook(id: number, book: { name: string }) {
    return this.client.send("book.update", { id, ...book });
  }
  deletebook(id: number) {
    return this.client.send("book.delete", id);
  }
}
