"use client";

import React from "react";
import { Modal } from "antd";

import CommonButton from "../Button";
import { CommonModalProps } from "@/shared/interfaces";

const CommonModal = ({
  title,
  isOpen,
  onClose,
  onOk,
  children,
  okText = "OK",
  cancelText = "Cancel",
}: CommonModalProps) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={onOk}
      onCancel={onClose}
      footer={[
        <CommonButton key="cancel" onClick={onClose}>
          {cancelText}
        </CommonButton>,
        <CommonButton
          key="submit"
          type="primary"
          onClick={onOk}
          style={{
            background: "#3575E2",
            color: "#FFFFFF",
          }}
        >
          {okText}
        </CommonButton>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default CommonModal;