import { FormInput } from "../shared/form/FormInput";

export const AdvancedSearchBar = () => {
  return (
    <form className="border-1 border-regal-blue-light/20 rounded-lg p-4 flex flex-wrap justify-between content-start">
      <FormInput id="brand" label="Brand" />
      <FormInput id="model" label="Model" />
      <FormInput id="version" label="Version" />
    </form>
  );
};
