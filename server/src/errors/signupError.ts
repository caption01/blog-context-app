import { CustomError } from "./customError";

export class SignUpError extends CustomError {
  statusCode = 501;

  constructor() {
    super("Email has been used");
    Object.setPrototypeOf(this, SignUpError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Email has been use",
        field: "email",
      },
    ];
  }
}
