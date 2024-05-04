import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema({ versionKey: false })
export class Expense {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    value: number;

    @Prop({ required: true })
    date: Date
}
export const ExpenseSchema = SchemaFactory.createForClass(Expense);