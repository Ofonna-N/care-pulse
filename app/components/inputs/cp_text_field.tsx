import cn from "@/app/utils/cn";
import { TextField } from "@radix-ui/themes";
import React from "react";

type Props = {
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  textInputFieldProps?: TextField.RootProps &
    React.RefAttributes<HTMLInputElement>;
  children?: React.ReactNode;
};

const CpTextField = (props: Props) => {
  const {
    children: labelText,
    id: labelId,
    className: labelClassName,
    ...otherLabelProps
  } = props.labelProps ?? {};

  const {
    children: textFiledChildren,
    className,
    ...otherTextFieldProps
  } = props.textInputFieldProps ?? {};

  return (
    <label
      id={labelId}
      className={cn("flex flex-col mb-6", labelClassName)}
      {...otherLabelProps}
    >
      {props.children ?? labelText}
      <TextField.Root
        size={"3"}
        type="text"
        variant="surface"
        className={cn("max-w-[350px]", className)}
        {...otherTextFieldProps}
      >
        {textFiledChildren}
      </TextField.Root>
    </label>
  );
};

export default CpTextField;
