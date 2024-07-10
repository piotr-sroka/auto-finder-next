"use client";

import { FormError, FormType } from "@/models/FormModels";
import { FormInput } from "../shared/form/FormInput";
import { useFormState } from "react-dom";

interface FormSubmitProp {
  type: string;
  submit: any;
}

export const AuthForm = ({ type, submit }: FormSubmitProp) => {
  const [state, formAction] = useFormState(submit, {
    formErrors: [] as FormError[],
  });

  return (
    <form className="border-1 border-regal-blue-light/20 rounded-lg p-4 flex flex-col justify-between content-start">
      <FormInput
        required
        id="email"
        name="email"
        label="Email"
        placeholder=""
        error={state.formErrors.find((error) => error.field === "email")?.error}
      />
      <FormInput
        required
        id="password"
        name="password"
        label="Password"
        placeholder=""
        type="password"
        error={
          state.formErrors.find((error) => error.field === "password")?.error
        }
      />
      {type === FormType.REGISTER && (
        <FormInput
          required
          id="confirm-password"
          name="confirm-password"
          label="Confirm password"
          placeholder=""
          type="password"
          error={
            state.formErrors.find((error) => error.field === "confirm-password")
              ?.error
          }
        />
      )}
      <div className="p-2 w-full">
        <button
          formAction={formAction}
          className="w-full bg-regal-red text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light"
        >
          {type === FormType.REGISTER && "Register now"}
          {type === FormType.LOGIN && "Log in"}
        </button>
      </div>
    </form>
  );
};
