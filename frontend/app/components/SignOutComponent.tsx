"use client";
import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SignOutButton: React.FC = () => {
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
    // Additional sign-out logic if needed
  };

  return (
    <Box sx={{ position: "fixed", top: 16, right: 16 }}>
      <Tooltip title="Sign Out" arrow placement="left">
        <IconButton onClick={handleSignOut}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SignOutButton;
