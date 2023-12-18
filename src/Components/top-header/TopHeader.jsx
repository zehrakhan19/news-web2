import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./TopHeader.css";

export default function TopHeader() {
  const tabButtons = [
    {
      name: "Live TV",
      onClick: () => null,
    },
    {
      name: "EPaper",
      onClick: () => null,
    },
    {
      name: "English",
      onClick: () => null,
    },
    {
      name: "Education",
      onClick: () => null,
    },
    {
      name: "YSR",
      onClick: () => null,
    },
    {
      name: "Careers",
      onClick: () => null,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kaburllu
          </Typography>
          {tabButtons?.map((item, id) => (
            <div key={id}>
              <div className="commonBtn" onClick={() => item?.onClick()}>
                {item?.name}
              </div>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
