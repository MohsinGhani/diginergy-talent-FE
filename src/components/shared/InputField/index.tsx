"use client";

import React from "react";
import { Input } from "antd";

import { CommonInputProps } from "@/shared/interfaces";

const CommonInput = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
  size,
  prefix,
  suffix,
  allowClear,
  ...rest
}: CommonInputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      size={size}
      prefix={prefix}
      suffix={suffix}
      allowClear={allowClear}
      {...rest}
    />
  );
};

export default CommonInput;
