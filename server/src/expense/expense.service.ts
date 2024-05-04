import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateExpenseDto} from './dto/create-expense.dto';
import {UpdateExpenseDto} from './dto/update-expense.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Expense} from "./expense.schema";
import {Model, Types} from "mongoose";

@Injectable()
export class ExpenseService {
  constructor(@InjectModel(Expense.name) private readonly expenseModel: Model<Expense>) {}

  async create(createExpenseDto: CreateExpenseDto) {
    const newExpense = new this.expenseModel(createExpenseDto);

    return await newExpense.save();
  }

  findAll() {
    return this.expenseModel.find();
  }

  async findOne(id: string) {
    const objectId = new Types.ObjectId(id);
    const expense = await this.expenseModel.findById(objectId);

    if(!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`)
    }

    return expense;
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    const objectId = new Types.ObjectId(id);
    const updatedExpense = await this.expenseModel.findOneAndUpdate(
        { _id: objectId },
        { $set: updateExpenseDto },
        { new: true }
    )

    if (!updatedExpense) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }

    return updatedExpense;
  }

  async remove(id: string) {
    const expense = await this.expenseModel.findByIdAndDelete(id);

    if(!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`)
    }
    return expense;
  }
}
