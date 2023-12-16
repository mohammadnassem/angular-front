export class Header {
  private timestamp: string = '';
  private serviceProvider: string = '';
  private themeColor: string = '';
  private microApp: string = '';
  private microAppDisplay: string = '';

  // constructor(timestamp: string, serviceProvider: string) {
  //   this.timestamp = timestamp;
  //   this.serviceProvider = serviceProvider;
  // }

  constructor(timestamp: string, serviceProvider: string, themeColor: string) {
    this.timestamp = timestamp;
    this.serviceProvider = serviceProvider;
    this.themeColor = themeColor;
  }

  getTimestamp(): string {
    return this.timestamp;
  }

  setTimestamp(timestamp: string): void {
    this.timestamp = timestamp;
  }

  getServiceProvider(): string {
    return this.serviceProvider;
  }

  setServiceProvider(serviceProvider: string): void {
    this.serviceProvider = serviceProvider;
  }

  getThemeColor(): string {
    return this.themeColor;
  }

  setThemeColor(themeColor: string): void {
    this.themeColor = themeColor;
  }

  getMicroApp(): string {
    return this.microApp;
  }

  setMicroApp(microApp: string): void {
    this.microApp = microApp;
  }

  getMicroAppDisplay(): string {
    return this.microAppDisplay;
  }

  setMicroAppDisplay(microAppDisplay: string): void {
    this.microAppDisplay = microAppDisplay;
  }
}


