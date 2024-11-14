"use client";

import { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Col, Form, Modal, Row } from "antd";
import { useRouter } from "next/navigation";

import sharedJson from "../../shared/json/index.json";
import CommonSwitch from "../shared/Switch";
import CommonButton from "../shared/Button";
import CommonTable from "../shared/Table";
import CommonModal from "../shared/Modal";
import CommonTypography from "../shared/Typography";
import CommonInput from "../shared/InputField";
import CommonSelect from "../shared/Select";
import CommonDatePicker from "../shared/Datepicker";

const SupplierTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  console.log("🚀 ~ editFormData:", editFormData);

  const [modal, contextHolder] = Modal.useModal();
  const router = useRouter();

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleActionClick = (id, actionType) => {
    setSelectedRowId(id);
    const selectedSupplier = data.find((item) => item.id === id);
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
    } else if (actionType === "view") {
      router.push(`/admin/supplier/${id}`);
    } else if (actionType === "edit") {
      // Edit logic here
      setEditFormData(selectedSupplier);
      setIsAddModalOpen(!isAddModalOpen);
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
      title: "Founded in",
      dataIndex: "founded",
      key: "founded",
      sorter: (a, b) => a.founded - b.founded,
    },
    {
      title: "No. of CV's",
      dataIndex: "cvCount",
      key: "cvCount",
      sorter: (a, b) => a.cvCount - b.cvCount,
    },
    {
      title: "Address",
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
            icon={<EyeOutlined style={{ color: "rgba(0, 0, 0, 0.85)" }} />}
            onClick={() => handleActionClick(record.id, "view")}
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
      const fetchedData = sharedJson.suppliers;
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
        tableTitle="Supplier's List"
        handleAddButtonClick={() => setIsAddModalOpen(!isAddModalOpen)}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        columns={columns}
        data={filteredData}
        loading={loading}
      />
      <CommonModal
        title="Add Supplier"
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
                label="Supplier's name"
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
                label="Founded in"
                name="founded"
                rules={[
                  {
                    required: true,
                    message: "Please select year of establishment",
                  },
                ]}
              >
                <CommonDatePicker
                  placeholder="Select year"
                  className="w-full"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Website"
                name="website"
                rules={[
                  {
                    required: true,
                    message: "Please enter supplier's website",
                  },
                ]}
              >
                <CommonInput placeholder="www.example.com" />
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
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter supplier's address",
              },
            ]}
          >
            <CommonInput placeholder="Enter address" />
          </Form.Item>
        </Form>
      </CommonModal>
      {contextHolder}
    </div>
  );
};

export default SupplierTable;