import { Body, Controller, Get, Post, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    // sign in
    @Post('/login')
    login(@Body() dto: AuthDto){
        return this.authService.signinLocal(dto)
    }
}
