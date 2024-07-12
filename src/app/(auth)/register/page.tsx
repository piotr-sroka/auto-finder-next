import { AuthForm } from "@/components/Auth/Form";
import { signup } from "../actions";
import { FormType } from "@/models/FormModels";

export default function Register() {
  return (
    <div className="container mx-auto p-12 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-semibold text-center mb-4">Create new user</h2>
      <AuthForm type={FormType.REGISTER} submit={signup} />
    </div>
  );
}
