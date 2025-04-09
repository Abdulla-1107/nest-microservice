import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    UsersModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 4001,
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
