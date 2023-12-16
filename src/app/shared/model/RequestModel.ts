import { User } from './User';
import { Transaction } from './Transaction';
import { Application } from './Application';
import { Header } from './Header';

export class RequestModel {
  private user!: User;
  private transaction!: Transaction;
  private application!: Application;
  private header!: Header;

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getTransaction(): Transaction {
    return this.transaction;
  }

  public setTransaction(transaction: Transaction): void {
    this.transaction = transaction;
  }

  public getHeader(): Header {
    return this.header;
  }

  public setHeader(header: Header): void {
    this.header = header;
  }

  public getApplication(): Application {
    return this.application;
  }

  public setApplication(application: Application): void {
    this.application = application;
  }
}

