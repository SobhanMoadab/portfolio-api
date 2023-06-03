import { IsNotEmpty, IsString } from 'class-validator';

export class TagDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
