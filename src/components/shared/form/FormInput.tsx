interface FormInputProp {
  id: string;
  label: string;
  placeholder: string;
}
export const FormInput = ({ id, label, placeholder }: FormInputProp) => {
  return (
    <div className="md:basis-1/3 md:min-w-72 w-full p-2">
      <div className="bg-regal-blue-light/10 flex flex-col rounded-lg overflow-hidden gap-1 p-4">
        <span className="ms-2 text-sm ">{label}</span>
        <input
          placeholder={placeholder}
          type="text"
          id={id}
          className="outline-regal-blue-light bg-transparent border-regal-blue-light border-1 rounded-lg p-2"
        />
      </div>
    </div>
  );
};
