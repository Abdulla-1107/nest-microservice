import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller("books")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern("book.all")
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @MessagePattern("book.one")
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.bookService.findOne(id);
  }

  @MessagePattern("book.create")
  @Post()
  create(@Body() body: { name: string }) {
    return this.bookService.create(body);
  }

  @MessagePattern("book.update")
  @Patch(":id")
  update(@Param("id") id: number, @Body() body: { name: string }) {
    return this.bookService.update(id, body);
  }

  @MessagePattern("book.delete")
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.bookService.delete(id);
  }
}
