import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SideNavigation from "./SideNavigation";
import { Card, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import HeaderContent from "./HeaderContent";
import EmployeeSideCard from "./EmployeeSideCard";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <React.StrictMode>
      <Layout style={{ width: "100%", height: "100vh" }}>
        <Sider
          width="14%"
          style={{
            backgroundColor: isMobile ? "#f5f5f5" : "white",
          }}
        >
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
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

reportWebVitals();
