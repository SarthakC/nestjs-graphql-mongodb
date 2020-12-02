import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentRepository])],
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
