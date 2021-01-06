import { CustomError } from "./customError";

export class SignInError extends CustomError {
  statusCode = 201;

  constructor() {
    super("Email has been used");
    Object.setPrototypeOf(this, SignInError.prototype);
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
