import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'expenseValue', async: false })
export class ExpenseValueValidator implements ValidatorConstraintInterface {
    validate(value: number, args: ValidationArguments) {
        return value > 0;
    }

    defaultMessage(args: ValidationArguments) {
        return 'Value must be greater than 0';
    }
}
