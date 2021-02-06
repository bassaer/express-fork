class Client {
  private code: number;
  constructor() {
    this.code = 0;
  }
  init(code: number) {
    this.code = code;
  }
  get() {
    return this.code;
  }
}

export default new Client();
