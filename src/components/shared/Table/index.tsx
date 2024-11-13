"use client";

import React from "react";
import { Input, Radio, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import CommonButton from "../Button";
import CommonTypography from "../Typography";
import { CommonTableProps } from "@/shared/interfaces";

const { Search } = Input;

const CommonTable = <T extends object = Record<string, unknown>>({
  columns,
  data,
  loading,
  rowKey = "id",
  pageSize = 10,
  tableTitle,
  handleAddButtonClick,
  onFilterChange,
  onSearch,
}: CommonTableProps<T>) => {
  const options = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Deactive", value: "deactive" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <CommonTypography type="title" classes="!font-bold !text-base">
          {tableTitle}
        </CommonTypography>
        <div className="flex items-center gap-4">
          <Radio.Group
            options={options}
            defaultValue="all"
            optionType="button"
            className="w-full"
            onChange={(e) => onFilterChange(e.target.value)}
          />
          <Search placeholder="Search" onSearch={onSearch} allowClear />
          <CommonButton
            onClick={handleAddButtonClick}
            icon={<PlusOutlined />}
            style={{
              background: "#3575E2",
              color: "#FFFFFF",
            }}
          >
            Add New
          </CommonButton>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={rowKey}
        pagination={{
          pageSizeOptions: ["10", "20", "30", "40"],
          pageSize: pageSize,
        }}
      />
    </div>
  );
};

export default CommonTable;
