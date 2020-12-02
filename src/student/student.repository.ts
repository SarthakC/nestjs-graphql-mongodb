import { EntityRepository, Repository } from 'typeorm';
import { Student } from './student.entity';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(
    firstName: string,
    lastName: string,
    id: string,
  ): Promise<Student> {
    const student = this.create({ firstName, lastName, id });
    return await this.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return this.find();
  }

  async getStudent(id: string): Promise<Student> {
    return this.findOne({ id });
  }

  async getStudentsByIds(studentIds: string[]): Promise<Student[]> {
    return this.find({ where: { id: { $in: studentIds } } });
  }
}
