"use client";

import { useFormState, useFormStatus } from "react-dom";
import { FormError } from "@/models/FormModels";

interface FormSubmitProp {
  submit: any;
  firstName?: string;
  lastName?: string;
}

export const ProfileInformationForm = async ({
  submit,
  firstName,
  lastName,
}: FormSubmitProp) => {
//   const { pending } = useFormStatus();       TODO
  const [state, formAction] = useFormState(submit, {
    formErrors: [] as FormError[],
  });
  return (
    <form className="px-6 py-4">
      <div className="grid gap-4">
        <div className="grid grid-cols-12 gap-6">
          <label className="text-sm px-3 py-2 col-span-4">First name</label>
          <input
            id="first-name"
            name="first-name"
            className="flex w-full rounded-md border border-regal-blue/5 bg-regal-blue/[.1] disabled:cursor-not-allowed disabled:opacity-70 text-sm px-3 py-2 col-span-8"
            defaultValue={firstName}
          />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <label className="text-sm px-3 py-2 col-span-4">Last name</label>
          <input
            id="last-name"
            name="last-name"
            className="flex w-full rounded-md border border-regal-blue/5 bg-regal-blue/[.1] disabled:cursor-not-allowed disabled:opacity-70 text-sm px-3 py-2 col-span-8"
            defaultValue={lastName}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button className="bg-regal-blue text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light">
            Cancel
          </button>
          <button
            formAction={formAction}
            className="bg-regal-red text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light"
          >
            {/* {pending ? "Saving..." : "Save"}        TODO */}
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
