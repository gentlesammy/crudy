import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {CreateTodoDto, UpdateTodoDto} from "./dto/create-todo-dto"
import {TodoService} from "./todo.service"
import {Todo} from "./interfaces/todo.interface"

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    // get all todos
    @Get()
    async findAll():Promise<Todo[]> {
        return await this.todoService.findAll()
    }

    //get a particular todo
    @Get(':id')
    async findOne(@Param('id') id):Promise<Todo> {
        return await this.todoService.findOne(id)
    }

    //create a todo using dto
    @Post()
    async create(@Body() createTodoDto:CreateTodoDto):Promise<Todo>{
        return this.todoService.create(createTodoDto)
    }

    //delete a particular todo
    @Delete(':id')
     deleteOne(@Param('id') id):Promise<Todo> {
        return this.todoService.delete(id)
    }

    @Put(':id')
    upDateTodo(@Body() updateTodoDto:UpdateTodoDto, @Param('id') id):Promise<Todo>{
        return this.todoService.update(id, updateTodoDto)
    }







}
