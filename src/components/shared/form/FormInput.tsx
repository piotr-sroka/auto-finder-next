interface FormInputProp {
  id: string;
  label: string;
}
export const FormInput = ({ id, label }: FormInputProp) => {
  return (
    <div className="md:basis-1/3 md:min-w-72 w-full p-2">
      <div className="bg-regal-blue-light/10 flex flex-col rounded-lg overflow-hidden gap-2 p-4">
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} />
      </div>
    </div>
  );
};
