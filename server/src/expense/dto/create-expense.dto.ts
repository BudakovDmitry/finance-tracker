import { IsNotEmpty, IsNumber, Validate } from "class-validator";
import {ExpenseValueValidator} from "./expense-value.validator";

export class CreateExpenseDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    type: string;

    @IsNumber()
    @IsNotEmpty()
    @Validate(ExpenseValueValidator)
    value: number;

    @IsNotEmpty()
    date: Date;
}
