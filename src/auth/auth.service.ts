import { Injectable } from '@nestjs/common';
import users from "./userJson.json"
import {User} from "./interface/user.interface"
import { AuthDto } from './dto/authDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}

   async signinLocal(code:AuthDto):Promise<string>{
        return await this.signPin(code.pin)
    }

    signPin(pin: string){
        return this.jwtService.sign({
            pin: pin
        })
    }

}
