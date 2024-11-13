"use client";

import React from "react";
import { Switch } from "antd";

import { CommonSwitchProps } from "@/shared/interfaces";

const CommonSwitch = ({ onChange, disabled, checked }: CommonSwitchProps) => {
  return <Switch disabled={disabled} onChange={onChange} checked={checked} />;
};

export default CommonSwitch;
