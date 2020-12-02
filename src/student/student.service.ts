import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './dto/create-student-input.dto';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const id = Date.now().toLocaleString();
    return this.studentRepository.createStudent(firstName, lastName, id);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.getStudents();
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.getStudent(id);
  }

  async getStudentsByIds(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.getStudentsByIds(studentIds);
  }
}
