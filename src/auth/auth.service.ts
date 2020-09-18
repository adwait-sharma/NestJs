import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { USerRepository } from './user.repository';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(USerRepository)
        private userRepository: USerRepository,
    ){}

    async signUp(authcredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.userRepository.signUp(authcredentialsDto);
    }

}
