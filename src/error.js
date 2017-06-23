export class DeeplogError extends Error {
  constructor(msg) {
    super(msg);

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = msg;
  }
}

export class BadOptionsError extends DeeplogError {
  constructor(opts, msg) {
    super(msg);

    this.options = opts;
  }
}
