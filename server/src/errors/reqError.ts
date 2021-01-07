import { CustomError } from "./customError";

// example error
export class RequestError extends CustomError {
  statusCode = 501;

  constructor(message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, RequestError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
