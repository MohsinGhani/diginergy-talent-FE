"use client";

import { Input } from "antd";
import React from "react";

import { CommonInputProps } from "@/shared/interfaces";

const CommonPassword = ({
  value,
  onChange,
  placeholder,
  disabled,
  size,
  prefix,
  suffix,
  visibilityToggle = true,
  allowClear,
  ...rest
}: CommonInputProps) => {
  return (
    <Input.Password
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      prefix={prefix}
      suffix={suffix}
      visibilityToggle={visibilityToggle}
      allowClear={allowClear}
      {...rest}
    />
  );
};

export default CommonPassword;
