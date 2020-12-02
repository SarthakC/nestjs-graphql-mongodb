import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsString()
  @MinLength(1)
  @MaxLength(25)
  @Field()
  firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(25)
  @Field()
  lastName: string;
}
