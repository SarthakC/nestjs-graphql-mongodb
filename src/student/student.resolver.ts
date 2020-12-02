import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStudentInput } from './dto/create-student-input.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return await this.studentService.createStudent(createStudentInput);
  }

  @Query(() => [StudentType])
  async getStudents(): Promise<Student[]> {
    return await this.studentService.getStudents();
  }

  @Query(() => StudentType)
  async getStudent(@Args('id') id: string): Promise<Student> {
    return await this.studentService.getStudent(id);
  }
}
