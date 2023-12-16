export class Application {
  private applicationID: string = "DHAWEB";
  private type: string = "WEBAPP";
  private platform: string = "WINDOWS";
  private url: string = "https://www.dha.gov.ae/en/";
  private version: string='1.0';
  private result: string= '';
  private notes: string= '';

  public getApplicationID(): string {
    return this.applicationID;
  }

  public setApplicationID(applicationID: string): void {
    this.applicationID = applicationID;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public getPlatform(): string {
    return this.platform;
  }

  public setPlatform(platform: string): void {
    this.platform = platform;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  public getVersion(): string {
    return this.version;
  }

  public setVersion(version: string): void {
    this.version = version;
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

