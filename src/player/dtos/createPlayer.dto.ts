import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  stats?: string;
}

