import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { LessonRepository } from './lesson.repository';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([LessonRepository]), StudentModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
