import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://budakovit:438g4DoHzkL7DIfp@finance-tracker-cluster.wwwavm6.mongodb.net/?retryWrites=true&w=majority&appName=finance-tracker-cluster'), UserModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
