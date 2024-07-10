interface FormInputProp {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
  required?: boolean;
}
export const FormInput = ({ id, name, label, placeholder, type = "text", error, required = false }: FormInputProp) => {
  return (
    <div className="md:basis-1/3 md:min-w-72 w-full p-2">
      <div className="bg-regal-blue-light/10 flex flex-col rounded-lg overflow-hidden gap-1 p-4">
        <span className="ms-2 text-sm ">{label}{required && <sup>*</sup>}</span>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          className="outline-regal-blue-light bg-transparent border-regal-blue-light border-1 rounded-lg p-2"
        />
        {error && <span className="ms-2 mt-2 text-xs text-regal-red-light">{error}</span>}
      </div>
    </div>
  );
};
