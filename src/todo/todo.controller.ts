import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import {CreateTodoDto, UpdateTodoDto} from "./dto/create-todo-dto"
import {TodoService} from "./todo.service"
import {Todo} from "./interfaces/todo.interface"
import { AuthGuard } from '@nestjs/passport';

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
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createTodoDto:CreateTodoDto):Promise<Todo>{
        return this.todoService.create(createTodoDto)
    }

    //delete a particular todo
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
     deleteOne(@Param('id') id):Promise<Todo> {
        return this.todoService.delete(id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    upDateTodo(@Body() updateTodoDto:UpdateTodoDto, @Param('id') id):Promise<Todo>{
        return this.todoService.update(id, updateTodoDto)
    }







}
