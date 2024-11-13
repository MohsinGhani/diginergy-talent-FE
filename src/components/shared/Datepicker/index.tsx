"use client";

import React from "react";
import { DatePicker } from "antd";

import { CommonDatePickerProps } from "@/shared/interfaces";

const CommonDatePicker = ({
  onChange,
  placeholder = "Select date",
  format = "DD-MM-YYYY",
  ...props
}: CommonDatePickerProps) => {
  return (
    <DatePicker
      onChange={onChange}
      placeholder={placeholder}
      format={format}
      {...props}
    />
  );
};

export default CommonDatePicker;
