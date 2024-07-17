"use client";
import { Theme } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return <Theme>{children}</Theme>;
};

export default AppProviders;
