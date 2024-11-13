"use client";

import { useEffect, useState } from "react";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Col, Form, Modal, Row } from "antd";

import CommonSwitch from "../shared/Switch";
import CommonButton from "../shared/Button";
import CommonTable from "../shared/Table";
import sharedJson from "../../shared/json/index.json";
import CommonInput from "../shared/InputField";
import CommonSelect from "../shared/Select";
import CommonTypography from "../shared/Typography";
import CommonModal from "../shared/Modal";

const ClientTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [modal, contextHolder] = Modal.useModal();

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleActionClick = (id, actionType) => {
    setSelectedRowId(id);
    if (actionType === "delete") {
      // Delete logic here
      modal.confirm({
        title: "Are you sure you want to delete this supplier?",
        icon: <CloseCircleOutlined className="!text-[#FF4D4F]" />,
        centered: true,
        okText: "Delete",
        okButtonProps: { danger: true },
        onOk() {
          setData((prevData) => prevData.filter((item) => item.id !== id));
        },
        content: "This action cannot be undone.",
        cancelButtonProps: { style: { display: "none" } },
      });
    } else if (actionType === "edit") {
      // Edit logic here
    }
  };

  const handleSwitchChange = (id, checked) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, status: checked ? "active" : "deactive" }
          : item
      )
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Location",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contact details",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <CommonSwitch
          checked={record.status === "active"}
          onChange={(checked) => handleSwitchChange(record.id, checked)}
        />
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center">
          <CommonButton
            type="link"
            icon={
              <DeleteOutlined style={{ color: "rgba(245, 34, 45, 0.85)" }} />
            }
            onClick={() => handleActionClick(record.id, "delete")}
          />
          <CommonButton
            type="link"
            icon={<EditOutlined style={{ color: "#3575E2" }} />}
            onClick={() => handleActionClick(record.id, "edit")}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      const fetchedData = sharedJson.clients;
      setData(fetchedData);
      setFilteredData(fetchedData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = data;

    if (filter !== "all") {
      filtered = filtered.filter(
        (item) => item.status.toLowerCase() === filter
      );
    }

    if (searchText) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [filter, searchText, data]);

  return (
    <div className="flex flex-col gap-4">
      <CommonTable
        tableTitle="Client's List"
        handleAddButtonClick={() => setIsAddModalOpen(!isAddModalOpen)}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        columns={columns}
        data={filteredData}
        loading={loading}
      />
      <CommonModal
        title="Add Client"
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onOk={() => setIsAddModalOpen(false)}
        okText="Send Invite"
      >
        <CommonTypography type="text" classes="text-[#141414B2] opacity-70">
          Enter the details below
        </CommonTypography>
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Client's name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter supplier's name",
                  },
                ]}
              >
                <CommonInput placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  {
                    required: true,
                    message: "Please select supplier's location",
                  },
                ]}
              >
                <CommonSelect
                  options={sharedJson.cities}
                  placeholder="Select location"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter supplier's email",
                  },
                ]}
              >
                <CommonInput placeholder="Enter email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone no"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter supplier's phone number",
                  },
                ]}
              >
                <CommonInput placeholder="Enter phone number" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </CommonModal>
      {contextHolder}
    </div>
  );
};

export default ClientTable;
