import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(createTodoDto);
    return newTodo.save();
  }

  async findAll() {
    return this.todoModel.find();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
