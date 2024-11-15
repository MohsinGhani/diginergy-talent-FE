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

const SuppliersNameTable = () => {
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
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: "Years of Experience",
      dataIndex: "yearsofexperience",
      key: "yearsofexperience",
      sorter: (a, b) => a.yearsofexperience.localeCompare(b.yearsofexperience),
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
      sorter: (a, b) => a.industry.localeCompare(b.industry),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: { status: string; id: any; }) => (
        <div className="flex items-center gap-2">
          <CommonSwitch
            checked={record.status === "active"}
            onChange={(checked) => handleSwitchChange(record.id, checked)}
          />
          <span>
            {record.status === "active" ? "Active" : "Deactive"}
          </span>
        </div>
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
      const fetchedData = sharedJson.UploadedcvsName; // Updated data source
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
        tableTitle="Uploaded CV's"
        handleAddButtonClick={() => setIsAddModalOpen(!isAddModalOpen)}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        columns={columns}
        data={filteredData}
        loading={loading}
      />
      <CommonModal
        title="Add Supplier's"
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
                rules={[{ required: true, message: "Please enter supplier's name" }]}
              >
                <CommonInput placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: "Please select supplier's location" }]}
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
                label="Industry"
                name="Industry"
                rules={[{ required: true, message: "Please enter Industry" }]}
              >
                <CommonInput placeholder="Enter Industry" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Years of experience"
                name="Years of experience"
                rules={[{ required: true, message: "Please enter Years of experience" }]}
              >
                <CommonInput placeholder="Enter Years of experience" />
              </Form.Item>
            </Col>
          </Row>
          
        </Form>
      </CommonModal>
      {contextHolder}
    </div>
  );
};

export default SuppliersNameTable;
