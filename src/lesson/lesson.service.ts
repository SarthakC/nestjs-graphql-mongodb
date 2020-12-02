import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignStudentsToLessonInput } from './dtos/assign-students-to-lesson.do';
import { CreateLessonInput } from './dtos/lesson-input.dto';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const id = Date.now().toString();
    return await this.lessonRepository.createLesson(
      name,
      startDate,
      endDate,
      id,
      students,
    );
  }

  async getLesson(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({ id });
  }

  async getLessons(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    const { lessonId, studentIds } = assignStudentsToLessonInput;

    const lesson = await this.getLesson(lessonId);
    lesson.students = [...lesson.students, ...studentIds];
    return await this.lessonRepository.save(lesson);
  }
}
