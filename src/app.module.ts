import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.SERVER}.i1cnnnl.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
