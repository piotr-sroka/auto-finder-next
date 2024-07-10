"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProfile(_prevState: any, formData: FormData) {
  const supabase = createClient();

  const data = {
    firstName: formData.get("first-name") as string,
    lastName: formData.get("last-name") as string,
  };

  const { error } = await supabase.auth.updateUser({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

//   revalidatePath("/profile", "layout");
}
