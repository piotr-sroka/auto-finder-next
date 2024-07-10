import { FormType } from "@/models/FormModels";
import { AuthForm } from "@/components/Auth/Form";
import { login } from "../actions";

export default function Login() {
  return (
    <div className="container mx-auto p-12 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-semibold text-center mb-4">Log in</h2>
      <AuthForm type={FormType.LOGIN} submit={login} />
    </div>
  );
}
