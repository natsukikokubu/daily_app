import React from "react";

interface FormProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  autocomplete: string;
  type?: string;
}

const Form: React.FC<FormProps> = ({
  id,
  onChange,
  value,
  label,
  type,
  autocomplete,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autocomplete}
        className="
        block
        rounded-md
        px-6
        pt-7
        pb-3
        w-full
        text-md
      text-slate-950
      bg-gray-50
        appearance-none
        focus:outline-none
        focus:ring-0
        peer"
        placeholder=""
      />
      <label
        className="
        absolute
        text-md
      text-zinc-400
        duration-150
        transform-translate-y-3
        scale-75
        top-5
        z-10
        origin-[0]
        left-5
peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default Form;
