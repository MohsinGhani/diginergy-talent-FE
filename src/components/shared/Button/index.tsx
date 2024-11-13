"use client";

import React from "react";
import { Button } from "antd";

import { CommonButtonProps } from "@/shared/interfaces";

const CommonButton = ({
  type,
  onClick,
  children,
  loading = false,
  disabled = false,
  style,
  classes,
  ...props
}: CommonButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      style={style}
      className={classes}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
