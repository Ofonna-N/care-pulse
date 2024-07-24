import cn from "@/app/utils/cn";
import { TextField } from "@radix-ui/themes";
import React from "react";
import { CPErrorText, CPErrorTextProps } from "../_index";

type Props = {
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  textInputFieldProps?: TextField.RootProps &
    React.RefAttributes<HTMLInputElement> & { fullwidth?: boolean };

  errorTextProps?: CPErrorTextProps;
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
    errorMesssage: errorTextPropsValue,
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
        className={cn(
          "max-w-[350px]",
          textFieldClassName,
          props.textInputFieldProps?.fullwidth && "w-full"
        )}
        {...otherTextFieldProps}
      >
        {textFieldChildren}
      </TextField.Root>
      <CPErrorText {...otherErrorTextProps}>
        {errorTextPropsValue ?? errorTextPropsChildren}
      </CPErrorText>
    </label>
  );
};

export default CpTextField;
