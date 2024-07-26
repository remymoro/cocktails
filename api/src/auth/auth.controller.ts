import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthSignInDto } from './dto/auth-signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() body: AuthSignInDto) {
    return this.authService.singIn(body);
  }
}
