import { SaveProfileButtons } from "./SaveProfileButtons";

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
          <SaveProfileButtons submitAction={submit} />
        </div>
      </div>
    </form>
  );
};
