import { Injectable, NotFoundException } from "@nestjs/common";

const books = [
  { id: 1, name: "asd" },
  { id: 2, name: "aefa" },
  { id: 3, name: "afas" },
];

@Injectable()
export class BookService {
  findAll() {
    return { data: books };
  }
  findOne(id: number) {
    let book = books.find((i) => i.id == id);
    if (!book) {
      return { message: "book topilmadi" };
    }
    return { data: book };
  }

  create(book: { name: string;}) {
    const newbook = {
      id: books.length + 1,
      ...book,
    };
    books.push(newbook);
    return { data: newbook };
  }

  update(id: number, book: { name: string; }) {
    const index = books.findIndex((i) => i.id == id);
    if (index == -1) {
      return { message: "book topilmadi" };
    }
    books[index] = { ...books[index], ...book };
    return { data: books[index] };
  }

  delete(id: number) {
    const index = books.findIndex((i) => i.id == id);
    if (index == -1) {
      return { message: "book topilmadi" };
    }
    books.splice(index, 1);
    return { message: "book o'chirildi" };
  }
}
