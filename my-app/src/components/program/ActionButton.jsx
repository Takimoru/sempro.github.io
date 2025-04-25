import React from "react";

const ActionButton = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  fullWidthOnMobile = true,
  ...props
}) => {
  const baseClasses =
    "h-12 text-base rounded-lg cursor-pointer flex items-center justify-center";

  const variantClasses = {
    primary:
      "text-white bg-blue-500 shadow-[0px_2px_4px_rgba(38,125,255,0.20)]",
    secondary: "bg-slate-50 text-stone-500",
  };

  const widthClasses = {
    primary: "w-[167px]",
    secondary: "w-[100px]",
  };

  const mobileClasses = fullWidthOnMobile ? "max-sm:w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses[variant]} ${mobileClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
