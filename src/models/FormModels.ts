export enum FormType {
  REGISTER = "register",
  LOGIN = "login",
}

export interface FormError {
  field: string;
  error: FormErrorType | string;
}
export enum FormErrorType {
  REQUIRED = "This field is required.",
  WRONG_EMAIL = "Please enter a valid email address.",
  PASSWORD_MATCH = "Passwords don't match."
}
