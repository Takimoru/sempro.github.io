import React from "react";

const FormField = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  fullWidth = true,
  id,
  ...props
}) => {
  // Generate a unique ID if none provided
  const fieldId = id || `field-${label?.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`mb-6 ${fullWidth ? "w-full" : ""}`}>
      <label
        htmlFor={fieldId}
        className="mb-2 text-sm font-medium leading-5 text-stone-500 block"
      >
        {label}
      </label>
      <div className="w-full">
        {type === "textarea" ? (
          <textarea
            id={fieldId}
            placeholder={placeholder}
            className="px-4 py-3.5 w-full text-base rounded-lg border border-solid resize-none h-[120px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
          />
        ) : (
          <input
            id={fieldId}
            type={type}
            placeholder={placeholder}
            className={`px-4 py-3.5 w-full text-base rounded-lg border border-solid text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default FormField;
