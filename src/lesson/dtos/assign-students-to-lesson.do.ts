import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AssignStudentsToLessonInput {
  @Field(() => ID)
  lessonId: string;

  @Field(() => [ID])
  studentIds: string[];
}
