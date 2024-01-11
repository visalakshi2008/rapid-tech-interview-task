import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Col, Flex, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import WebComponentEmployeeData from "./EmployeesData";

const EmployeeSideCard = () => {
  const data = [
    {
      name: "Visalakshi",
      role: "Python",
    },
    {
      name: "Test",
      role: "Web Developer",
    },
    {
      name: "Visalakshi",
      role: "Python",
    },
    {
      name: "Rapid",
      role: "Test",
    },
    {
      name: "Noor",
      role: "Web Developer",
    },
    {
      name: "Suresh",
      role: "Web Developer",
    },
    {
      name: "John",
      role: "Web Developper",
    },
    {
      name: "Doe",
      role: "234",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (value) => {
    console.log(value);
    const searchTermLower = value.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTermLower) ||
        item.role.toLowerCase().includes(searchTermLower)
    );
    console.log(filtered);
    setFilteredData(filtered);
    setSearchTerm(value);
  };

  const isMobile = window.innerWidth <= 1152;
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: isMobile ? 12 : 10 }}
          lg={{ span: isMobile ? 12 : 5 }}
          xl={{ span: isMobile ? 12 : 5 }}
          xxl={{ span: isMobile ? 12 : 5 }}
        >
          <Input
            placeholder="Search Candidate"
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {filteredData.map((item, index) => (
            <Flex
              key={index}
              style={{
                backgroundColor: "#FFF6F6",
                marginTop: "10px",
                padding: "10px",
                borderRadius: "8px",
                alignItems: "center",
              }}
            >
              <Avatar style={{ backgroundColor: "peachpuff" }}>
                <Typography style={{ fontSize: "20px", color: "black" }}>
                  {item.name[0]}
                </Typography>
              </Avatar>
              <Typography style={{ paddingLeft: "8px" }}>
                {item.name} <br />
                <span>{item.role}</span>
              </Typography>
            </Flex>
          ))}
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: isMobile ? 24 : 14 }}
          lg={{ span: isMobile ? 24 : 19 }}
          xl={{ span: isMobile ? 24 : 19 }}
          xxl={{ span: isMobile ? 24 : 19 }}
        >
          <WebComponentEmployeeData />
        </Col>
      </Row>
    </>
  );
};

export default EmployeeSideCard;
