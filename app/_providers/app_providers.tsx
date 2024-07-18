"use client";
import { Theme } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return (
    <Theme appearance="dark" accentColor="green">
      {children}
    </Theme>
  );
};

export default AppProviders;
