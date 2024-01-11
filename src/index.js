import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SideNavigation from "./SideNavigation";
import { Card, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import HeaderContent from "./HeaderContent";

import EmployeeSideCard from "./EmployeeSideCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout width="100%" style={{ height: "100vh" }}>
      <Sider width="12%" style={{ backgroundColor: "white" }}>
        <SideNavigation />
      </Sider>
      <Layout>
        <Content style={{ marginRight: "20px", marginLeft: "20px" }}>
          <HeaderContent />
          <Card style={{ marginTop: "20px" }}>
            <EmployeeSideCard />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
