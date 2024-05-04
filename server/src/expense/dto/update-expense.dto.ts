import { PartialType } from '@nestjs/swagger';
import { CreateExpenseDto } from './create-expense.dto';
import {IsNotEmpty, IsNumber, Validate} from "class-validator";
import {ExpenseValueValidator} from "./expense-value.validator";

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
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
