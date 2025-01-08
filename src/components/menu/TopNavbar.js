import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = ({ sidebarWidth, isSidebarOpen, toggleSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${isSidebarOpen ? sidebarWidth : 60}px)`,
        marginLeft: `${isSidebarOpen ? sidebarWidth : 60}px`,
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: "margin-left 0.3s, width 0.3s",
      }}
    >
      <Toolbar>
        <IconButton onClick={toggleSidebar} sx={{ color: "#0098c9", mr: 2 }}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#0098c9", fontWeight: "bold" }}
        >
          Sistema RS Data
        </Typography>
        <Box>
          <IconButton sx={{ color: "#0098c9" }}>
            <FontAwesomeIcon icon={faUserCircle} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
