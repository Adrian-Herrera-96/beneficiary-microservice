import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateFingerprintDto {
    @IsString()
    @IsOptional()
    wsq?: string;

    @IsNumber()
    @IsPositive()
    quality: number;

    @IsNumber()
    finger_id: number;
}
