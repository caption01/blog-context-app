import { CustomError } from "./customError";

export class TokenError extends CustomError {
  statusCode = 401;

  constructor(message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, TokenError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        field: "token",
      },
    ];
  }
}
