"use client";

import { FormError } from "@/models/FormModels";
import { useFormState, useFormStatus } from "react-dom"

interface FormSubmitProp {
  submitAction: any;
}

export const SaveProfileButtons = ({
  submitAction,
}: FormSubmitProp) => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(submitAction, {
    formErrors: [] as FormError[],
  });
  return <button
    disabled={pending}
    formAction={formAction}
    className="bg-regal-red text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {pending ? "Saving..." : "Save"}
  </button>
}