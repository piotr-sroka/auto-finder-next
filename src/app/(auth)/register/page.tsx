import { FormInput } from "@/components/shared/form/FormInput";
import { signup } from "../actions";

export default function Register() {
  return (
    <div className="container mx-auto p-12 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-semibold text-center mb-4">Create new user</h2>
      <form className="border-1 border-regal-blue-light/20 rounded-lg p-4 flex flex-col justify-between content-start">
        <FormInput id="email" label="Email" placeholder="" />
        <FormInput id="password" label="Password" placeholder="" />
        <FormInput id="repeat-password" label="Repeat password" placeholder="" />
        <div className="p-2 w-full">
          <button formAction={signup} className="w-full bg-regal-red text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light">
            Register now
          </button>
        </div>
      </form>
    </div>
  );
}
