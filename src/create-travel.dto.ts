import { IsInt, IsNotEmpty, IsNumber, IsString, IsUrl, Max, MinLength } from "class-validator";

export class CreateTravelDto{
  @IsString()
  @IsNotEmpty({message: "Kötelező a megadás"})  
  destination: string;

  @IsString()
  @MinLength(30)
  description: string;

  @IsUrl()
  imgUrl: string;

  @IsInt()
  price: number; 

  @IsNumber()
  @Max(50)
  discount: number;
}
