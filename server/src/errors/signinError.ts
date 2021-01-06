import { CustomError } from "./customError";

type SignInErrorField = {
  msg: string;
  field: string;
};

export class SignInError extends CustomError {
  statusCode = 201;
  errors: SignInErrorField[] = [];

  constructor(errors: SignInErrorField[]) {
    super("Signin error");
    this.errors = errors;
    Object.setPrototypeOf(this, SignInError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => ({
      message: err.msg,
      field: err.field,
    }));
  }
}
