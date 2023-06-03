import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[44px] md:text-[50px] text-[58px]",
  h2: "font-normal md:text-5xl sm:text-[42px] text-[56px]",
  h3: "font-normal sm:text-[38px] md:text-[44px] text-[52px]",
  h4: "font-normal text-5xl sm:text-[38px] md:text-[44px]",
  h5: "font-semibold md:text-2xl sm:text-[22px] text-[26px]",
  h6: "font-normal text-2xl md:text-[22px] sm:text-xl",
  body1: "font-normal text-[26px] sm:text-lg md:text-xl",
  body2: "font-normal text-xl",
  body3: "font-normal text-lg",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
