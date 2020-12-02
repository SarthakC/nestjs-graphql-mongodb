import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDate, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDate()
  @Field()
  startDate: Date;

  @IsDate()
  @Field()
  endDate: Date;

  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
