import cn from "@/app/utils/cn";
import React from "react";

export type CPErrorTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { value?: React.ReactNode };

const CPErrorText = (props: CPErrorTextProps) => {
  return (
    <small
      className={cn(
        "text-red-700",
        {
          ["py-1"]: !!props?.value || !!props.children || false,
        },
        props.className
      )}
      {...props}
    >
      {props.value ?? props.children}
    </small>
  );
};

export default CPErrorText;
