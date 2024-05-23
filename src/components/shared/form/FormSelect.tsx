"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FormSelectProp {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
}
export const FormSelect = ({
  id,
  label,
  placeholder,
  options,
}: FormSelectProp) => {
  const selectContainer = useRef<HTMLDivElement | null>(null);
  const selectElement = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log(selectElement.current);
      if (
        selectContainer.current &&
        !selectContainer.current.contains(event.target as HTMLDivElement)
      ) {
        if (selectElement.current) {
          selectElement.current.scrollTop = 0;
        }
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectContainer]);
  return (
    <div className="md:basis-1/3 md:min-w-72 w-full p-2">
      <div
        ref={selectContainer}
        className="bg-regal-blue-light/10 flex flex-col rounded-lg gap-1 p-4 relative"
      >
        <span className="ms-2 text-sm ">{label}</span>
        <div
          className="w-full flex items-center relative"
          onClick={toggleSelect}
        >
          <input
            placeholder={placeholder}
            type="text"
            id={id}
            className="peer w-full pe-8 placeholder:text-sm outline-regal-blue-light bg-transparent border-regal-blue-light border-1 rounded-lg p-2 focus:rounded-b-none"
          />
          <IoIosArrowDown className="peer-focus:hidden pointer-events-none absolute right-2" />
          <IoIosArrowUp className="peer-focus:block hidden pointer-events-none absolute right-2" />
        </div>
        <div
          ref={selectElement}
          className={`${
            isOpen ? "" : "hidden"
          } overflow-auto absolute left-0 w-full top-full border-1 border-t-0 border-regal-blue-light/40 bg-regal-beige p-4 rounded-b-lg max-h-80`}
        >
          {options.map((option) => (
            <div key={option} className="flex w-full">
              <label
                htmlFor={option}
                className="flex w-full gap-2 items-center my-2"
              >
                <input
                  id={option}
                  type="checkbox"
                  className="w-5 h-5 accent-regal-blue"
                />{" "}
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
