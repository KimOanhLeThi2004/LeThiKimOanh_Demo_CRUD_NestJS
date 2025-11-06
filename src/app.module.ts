import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234', // thay bằng mật khẩu MySQL của bạn
      database: 'testdb',        // tên database (hãy tạo trước trong MySQL)
      autoLoadEntities: true,
      synchronize: true, // chỉ dùng khi dev (tự tạo bảng)
    }),
    UsersModule,
  ],
})
export class AppModule {}
