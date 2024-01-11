import {
  BellFilled,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Flex, Row, Typography } from "antd";
import React from "react";

const HeaderContent = () => {
  return (
    <>
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          xl={{ span: 15 }}
          xxl={{ span: 19 }}
          style={{ paddingBlock: "12px" }}
        >
          <Typography style={{ fontSize: "20px", fontWeight: 500 }}>
            Approve Timesheet
          </Typography>
        </Col>

        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          xl={{ span: 9 }}
          xxl={{ span: 5 }}
          style={{
            paddingBlock: "12px",
          }}
        >
          <Flex style={{ display: "flex", textAlign: "end" }}>
            <Flex
              style={{
                justifyContent: "flex-end",

                alignItems: "center",
              }}
            >
              <Avatar
                style={{
                  backgroundColor: "white",
                }}
                icon={<UserOutlined style={{ color: "green" }} />}
              />
              <Typography style={{ marginLeft: "8px" }}>
                Good Morning
                <Typography style={{ textAlign: "left" }}>John Doe</Typography>
              </Typography>
            </Flex>

            <Flex
              style={{
                justifyContent: "flex-end",
              }}
            >
              <BellFilled
                style={{
                  color: "red",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "30px",
                  fontSize: "20px",
                  marginLeft: "90px",
                }}
              />
            </Flex>
          </Flex>
        </Col>

        <Col
          xxl={{ span: 6 }}
          xl={{ span: 6 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <Card
            className="cardPadding"
            style={{
              marginRight: "10px",
              padding: "10px",
              height: "80px",
            }}
          >
            <Typography style={{ color: "gray", paddingLeft: "20px" }}>
              Total
            </Typography>
            <Flex style={{ justifyContent: "space-between" }}>
              <Typography style={{ paddingLeft: "20px", fontWeight: 600 }}>
                64
              </Typography>
              <Typography style={{ color: "red", fontSize: "20px" }}>
                #
              </Typography>
            </Flex>
          </Card>
        </Col>
        <Col
          xl={{ span: 6 }}
          xxl={{ span: 6 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <Card
            className="cardPadding"
            style={{
              marginRight: "10px",
              padding: "10px",
              height: "80px",
            }}
          >
            <Typography style={{ color: "gray", paddingLeft: "20px" }}>
              Pending
            </Typography>

            <Flex style={{ justifyContent: "space-between" }}>
              <Typography style={{ paddingLeft: "20px", fontWeight: 600 }}>
                64
              </Typography>
              <ClockCircleOutlined
                style={{ color: "orange", fontSize: "20px" }}
              />
            </Flex>
          </Card>
        </Col>
        <Col
          xl={{ span: 6 }}
          xxl={{ span: 6 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <Card
            className="cardPadding"
            style={{
              marginRight: "10px",
              padding: "10px",
              height: "80px",
            }}
          >
            <Typography style={{ color: "gray", paddingLeft: "20px" }}>
              Approved
            </Typography>

            <Flex style={{ justifyContent: "space-between" }}>
              <Typography style={{ paddingLeft: "20px", fontWeight: 600 }}>
                64
              </Typography>
              <CheckCircleOutlined
                style={{ color: "#02D8E9", fontSize: "20px" }}
              />
            </Flex>
          </Card>
        </Col>
        <Col
          xl={{ span: 6 }}
          xxl={{ span: 6 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <Card
            className="cardPadding"
            style={{
              marginRight: "10px",
              padding: "10px",
              height: "80px",
            }}
          >
            <Typography style={{ color: "gray", paddingLeft: "20px" }}>
              Clarification Pending
            </Typography>

            <Flex style={{ justifyContent: "space-between" }}>
              <Typography style={{ paddingLeft: "20px", fontWeight: 600 }}>
                64
              </Typography>

              <ExclamationCircleOutlined
                style={{ color: "blue", fontSize: "20px" }}
              />
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HeaderContent;
