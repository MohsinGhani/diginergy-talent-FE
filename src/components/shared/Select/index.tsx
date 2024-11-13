"use client";

import React from "react";
import { Select } from "antd";

import { CommonSelectProps } from "@/shared/interfaces";

const { Option } = Select;

const CommonSelect = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  style,
  allowClear = true,
  disabled = false,
}: CommonSelectProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      allowClear={allowClear}
      disabled={disabled}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default CommonSelect;
