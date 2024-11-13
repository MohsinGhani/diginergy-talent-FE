"use client";

import React from "react";
import { Card, Form } from "antd";

import CommonTypography from "../Typography";
import CommonInput from "../InputField";
import CommonButton from "../Button";
import CommonPassword from "../PasswordField";
import { AuthCardsProps } from "@/shared/interfaces";

const AuthCards = ({
  title,
  subtitle,
  fields,
  buttonText,
  handleSubmit,
  forgotPassword,
}: AuthCardsProps) => {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
      <Card className="w-full max-w-96 rounded-3xl border border-[#D6D6D6]">
        <div className="flex flex-col mb-6">
          <CommonTypography type="title" level={2} classes="font-semibold">
            {title}
          </CommonTypography>
          <CommonTypography type="text" classes="text-base">
            {subtitle}
          </CommonTypography>
        </div>
        <Form layout="vertical" onFinish={handleSubmit}>
          {(fields || []).map((field, key) => {
            return (
              <Form.Item
                key={key}
                label={field?.label}
                name={field?.name}
                rules={[
                  {
                    required: true,
                    message: field?.requiredMessage,
                  },
                ]}
              >
                {field?.name === "password" ||
                field?.name === "new-password" ? (
                  <CommonPassword />
                ) : (
                  <CommonInput />
                )}
              </Form.Item>
            );
          })}
          {forgotPassword && (
            <div className="flex justify-end mb-4">
              <CommonTypography type="link" classes="!text-[#3575E2]">
                Forgot Password?
              </CommonTypography>
            </div>
          )}
          <Form.Item className="mb-0">
            <CommonButton
              className="w-full"
              htmlType="submit"
              style={{
                background: "#3575E2",
                color: "#FFFFFF",
              }}
            >
              {buttonText}
            </CommonButton>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AuthCards;
