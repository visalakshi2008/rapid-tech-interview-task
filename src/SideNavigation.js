import React, { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  CheckSquareOutlined,
  FileDoneOutlined,
  LaptopOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Image, Typography } from "antd";
import rapidLogo from "../src/images/rapidtech-logo.png";

const SideNavigation = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const navigationButtons = (
    <>
      <Image
        src={rapidLogo}
        preview={false}
        style={{ marginLeft: "30px", marginBlock: "20px" }}
        width={100}
      />
      <Typography style={{ marginLeft: "30px", marginTop: "10px" }}>
        <AppstoreOutlined
          style={{
            color: "red",

            paddingRight: "10px",
            fontSize: "20px",
            paddingBottom: "15px",
          }}
        />
        Dashboard
      </Typography>
      <Typography style={{ marginLeft: "30px" }}>
        <UserAddOutlined
          style={{
            color: "red",

            paddingRight: "10px",
            paddingBottom: "15px",
            fontSize: "20px",
          }}
        />
        Add Candidate
      </Typography>
      <Typography style={{ marginLeft: "30px" }}>
        <AppstoreOutlined
          style={{
            color: "red",

            paddingRight: "10px",
            paddingBottom: "15px",
            fontSize: "20px",
          }}
        />
        Assignment Dashboard
      </Typography>
      <Typography style={{ marginLeft: "30px" }}>
        <FileDoneOutlined
          style={{
            color: "red",

            paddingRight: "10px",
            paddingBottom: "15px",
            fontSize: "20px",
          }}
        />
        My Timesheet
      </Typography>
      <Typography style={{ marginLeft: "30px" }}>
        <CheckSquareOutlined
          style={{
            color: "red",

            paddingRight: "10px",
            paddingBottom: "15px",
            fontSize: "20px",
          }}
        />
        Approve Timesheet
      </Typography>
      <Typography style={{ marginLeft: "30px" }}>
        <LaptopOutlined
          style={{
            color: "red",

            paddingRight: "10px",
            paddingBottom: "15px",
            fontSize: "20px",
          }}
        />
        Login TO HRMS
      </Typography>
    </>
  );

  return (
    <>
      {isMobile ? (
        <Button
          type="link"
          onClick={toggleDrawer}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,

            paddingTop: "20px",
          }}
          className="menu-button"
        >
          <MenuOutlined
            style={{
              fontSize: "20px",
              marginLeft: "20px",
              fontWeight: 700,
            }}
          />
        </Button>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <div style={{ flex: 1, overflowY: "auto" }}>{navigationButtons}</div>

          <div style={{ padding: "20px" }}>
            <Typography style={{ marginLeft: "15px" }}>
              <LogoutOutlined
                style={{
                  color: "red",
                  fontSize: "20px",
                  paddingRight: "10px",
                }}
              />
              Sign Out
            </Typography>
          </div>
        </div>
      )}

      <Drawer
        title={<Typography>Menu Items</Typography>}
        placement="left"
        closable={false}
        onClose={toggleDrawer}
        visible={drawerVisible}
        className="menu-drawer"
        style={{ width: "75%" }}
      >
        <Button
          type="text"
          onClick={toggleDrawer}
          style={{
            position: "absolute",
            right: "100px",
            top: "10px",
            fontWeight: 700,
          }}
        >
          X
        </Button>

        {navigationButtons}

        <div style={{ padding: "20px" }}>
          <Typography style={{ marginLeft: "15px" }}>
            <LogoutOutlined
              style={{
                color: "red",
                fontSize: "20px",
                paddingRight: "10px",
              }}
            />
            Sign Out
          </Typography>
        </div>
      </Drawer>
    </>
  );
};

export default SideNavigation;
