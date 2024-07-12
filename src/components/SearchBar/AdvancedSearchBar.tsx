import { IdAndName } from "@/models/IdAndNameDto";
import { FormInput } from "../shared/form/FormInput";
import { FormSelect } from "../shared/form/FormSelect";
import { createClient } from "@/utils/supabase/server";

export const AdvancedSearchBar = async () => {
  const supabase = createClient();
  const { data: brands } = await supabase.from("brands").select();
  return (
    <form className="border-1 border-regal-blue-light/20 rounded-lg p-4 flex flex-wrap justify-between content-start">
      <FormSelect
        id="brand"
        label="Brand"
        placeholder="Select car brand(s)"
        options={brands || []}
      />
      <FormInput id="brand" label="Brand" placeholder="" />
      <FormInput id="model" label="Model" placeholder="" />
      <FormInput id="version" label="Version" placeholder="" />
    </form>
  );
};
