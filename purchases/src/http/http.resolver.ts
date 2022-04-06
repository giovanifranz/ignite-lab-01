import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../database/prisma/prisma.service';
import { AuthorizationGuard } from './auth/authorization.guard';

@Resolver('http')
export class HttpResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'this.prisma.customer.findMany();';
  }
}