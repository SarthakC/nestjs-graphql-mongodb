import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(
    name: string,
    startDate: Date,
    endDate: Date,
    id: string,
    students: string[],
  ): Promise<Lesson> {
    const lesson = this.create({ name, startDate, endDate, id, students });
    return await this.save(lesson);
  }
}
