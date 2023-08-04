import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schemas';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo.controller';
import { ConfigModule } from '@nestjs/config';


@Module({

    imports: [
      ConfigModule.forRoot(),
        MongooseModule.forFeature([
          {
            name: Todo.name,
            schema: TodoSchema,
          },
        ]),
      ],
      providers: [TodoService],
      controllers: [TodoController],

})
export class TodoModule {}
