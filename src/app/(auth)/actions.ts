"use server";

import { FormError, FormErrorType } from "@/models/FormModels";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(_prevState: any, formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(_prevState: any, formData: FormData) {
  const supabase = createClient();
  const errors: FormError[] = [];

  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!email?.toString().length) {
    errors.push({ field: "email", error: FormErrorType.REQUIRED });
  }

  if (
    email?.toString().length &&
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(email.toString())
  ) {
    errors.push({ field: "email", error: FormErrorType.WRONG_EMAIL });
  }

  if (!password?.toString().length) {
    errors.push({ field: "password", error: FormErrorType.REQUIRED });
  }

  if (!confirmPassword?.toString().length) {
    errors.push({ field: "confirm-password", error: FormErrorType.REQUIRED });
  }

  if (password?.toString() !== confirmPassword?.toString()) {
    errors.push({
      field: "confirm-password",
      error: FormErrorType.PASSWORD_MATCH,
    });
  }

  if (errors.length) {
    return {
      formErrors: errors,
    };
  }

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    if (error.code?.includes("password")) {
      errors.push({ field: "password", error: error.message });
    }
    return {
      formErrors: errors,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}
