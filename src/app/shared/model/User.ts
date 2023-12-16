export class User {
  private source: string = "ANONYMOUS";
  private emiratesID: string='';
  private username: string='';
  private email: string='';
  private mobile: string='';

  getSource(): string {
    return this.source;
  }

  setSource(source: string): void {
    this.source = source;
  }

  getEmiratesID(): string {
    return this.emiratesID;
  }

  setEmiratesID(emiratesID: string): void {
    this.emiratesID = emiratesID;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getMobile(): string {
    return this.mobile;
  }

  setMobile(mobile: string): void {
    this.mobile = mobile;
  }
}

