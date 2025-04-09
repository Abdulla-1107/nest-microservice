import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    findAll(){
        return [
            {name: "asd", age:23},
            {name: "aefa", age:23},
            {name: "afas", age:23},
        ]
    }
}

