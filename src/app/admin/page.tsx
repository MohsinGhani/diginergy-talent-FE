"use client";

import ClientTable from "@/components/ClientsTable";
import SupplierTable from "@/components/SuppliersTable";
import { Tabs } from "antd";

const AdminDashboard = () => {
  const items = [
    {
      key: "1",
      label: "Suppliers",
      children: <SupplierTable />,
    },
    {
      key: "2",
      label: "Clients",
      children: <ClientTable />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default AdminDashboard;
