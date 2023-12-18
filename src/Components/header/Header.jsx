import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import Dropdown from "../OnHoverDropDown";

export default function Header() {
  const tabs = [
    {
      tabName: "News",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Andra Pradesh",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Telangana",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "The Movie",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Sports",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Business",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Photos",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Videos",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "And Yet",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header">
        <Toolbar className="tab-container">
          <div className="bar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Box component={"div"} className="tab-box">
            {tabs?.map((tab, i) => (
              <div key={i}>
                <Dropdown label={tab.tabName} options={tab.options} />
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
