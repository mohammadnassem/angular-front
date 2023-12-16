export class Transaction {
  private transactionID: string = Date.now().toString();
  private gessEnabled: string = "true";
  private serviceCode: string = "1111";
  private serviceDescription: string = "happiness demo transaction";
  private channel: string = "WEB";
  private result: string='';
  private notes: string='';

  public getTransactionID(): string {
    return this.transactionID;
  }

  public setTransactionID(transactionID: string): void {
    this.transactionID = transactionID;
  }

  public getGessEnabled(): string {
    return this.gessEnabled;
  }

  public setGessEnabled(gessEnabled: string): void {
    this.gessEnabled = gessEnabled;
  }

  public getServiceCode(): string {
    return this.serviceCode;
  }

  public setServiceCode(serviceCode: string): void {
    this.serviceCode = serviceCode;
  }

  public getServiceDescription(): string {
    return this.serviceDescription;
  }

  public setServiceDescription(serviceDescription: string): void {
    this.serviceDescription = serviceDescription;
  }

  public getChannel(): string {
    return this.channel;
  }

  public setChannel(channel: string): void {
    this.channel = channel;
  }

  public getResult(): string {
    return this.result;
  }

  public setResult(result: string): void {
    this.result = result;
  }

  public getNotes(): string {
    return this.notes;
  }

  public setNotes(notes: string): void {
    this.notes = notes;
  }
}

