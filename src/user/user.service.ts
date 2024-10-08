import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Logger } from "winston";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { ValidationService } from "../common/validation.service";
import { RegisterUserRequest, UserResponse } from "../model/user.model";
import { UserValidation } from "./user.validation";
import * as bcrypt from 'bcrypt';
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class UserService {
    constructor(
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private prismaService: PrismaService
    ) { }

    async register(request: RegisterUserRequest): Promise<UserResponse> {
        this.logger.info(`Register new user ${JSON.stringify(request)}`)
        const registerRequest: RegisterUserRequest = this.validationService.validate(
            UserValidation.REGISTER, request
        );
        const totalUserWithSameUsernamr = await this.prismaService.user.count({
            where: {
                username: registerRequest.username,
            }
        })
        if (totalUserWithSameUsernamr != 0) {
            throw new HttpException('Username already exists', 400)
        }
        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);
        const user = await this.prismaService.user.create({
            data: registerRequest,
        });
        return {
            username: user.username,
            name: user.name,
        };
    }
}