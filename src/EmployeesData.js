import { Table, Tag, Typography, Col, Row } from "antd";
import React from "react";

const EmployeesData = () => {
  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "#D9EDBF";
      case "Pending":
        return "#FFDD95";
      case "Rejected":
        return "#FF677D";
      default:
        return "#86A7FC";
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Company",
      dataIndex: "compnay",
      key: "company",
    },
    {
      title: "Week Ending",
      dataIndex: "week_ending",
      key: "week_ending",
    },
    {
      title: "Total Hours",
      dataIndex: "total_hours",
      key: "total_hours",
    },
    {
      title: "Submitted At",
      dataIndex: "submitted_at",
      key: "submitted_at",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Tag
          color="#55acee"
          style={{
            backgroundColor: statusColor(text),
            color: "#000",
          }}
        >
          {" "}
          {text}
        </Tag>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-01-31",
      total_hours: 40,
      submitted_at: "2024-02-01",
      status: "Pending",
    },
    {
      key: "2",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-01-31",
      total_hours: 40,
      submitted_at: "2024-02-02",
      status: "Rejected",
    },
    {
      key: "3",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Pending",
    },
    {
      key: "4",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Pending",
    },
    {
      key: "5",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Approved",
    },
    {
      key: "6",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Approved",
    },
    {
      key: "7",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Approved",
    },
    {
      key: "8",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Approved",
    },
    {
      key: "9",
      name: "John Doe",
      department: "IT",
      compnay: "beyondscale technologies",
      week_ending: "2024-02-07",
      total_hours: 40,
      submitted_at: "2024-02-03",
      status: "Approved",
    },
  ];
  const paginationConfig = {
    pageSize: 4,
    showSizeChanger: false,
    showQuickJumper: false,
    showTotal: (total) => `Rows per page: 5 `,
  };
  return (
    <div style={{ marginLeft: "50px" , marginTop: '15px', overflowX:"auto "}}>
      <Typography style={{ paddingBottom: "15px", fontWeight: 700 }}>
        All Timesheets
      </Typography>
      <Table
        columns={columns}
        dataSource={data}
        pagination={paginationConfig}
        style={{ border: "1px solid #e8e8e8" }}
      />
    </div>
  );
};

export default EmployeesData;
