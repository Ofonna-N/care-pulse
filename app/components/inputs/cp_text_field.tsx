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

  errorTextProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
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
    children: textFieldChildren,
    className: textFieldClassName,
    ...otherTextFieldProps
  } = props.textInputFieldProps ?? {};

  const {
    children: errorTextPropsChildren,
    className: errorTextPropsClassName,
    ...otherErrorTextProps
  } = props.errorTextProps ?? {};

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
        className={cn("max-w-[350px]", textFieldClassName)}
        {...otherTextFieldProps}
      >
        {textFieldChildren}
      </TextField.Root>
      <small
        className={cn(
          "text-red-700",
          !!errorTextPropsChildren && "py-1",
          errorTextPropsClassName
        )}
        {...otherErrorTextProps}
      >
        {errorTextPropsChildren}
      </small>
    </label>
  );
};

export default CpTextField;
