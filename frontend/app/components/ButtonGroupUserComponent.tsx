"use client";
import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddBoxIcon from "@mui/icons-material/AddBox";

const SignOutButtonUser: React.FC = () => {
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  const handleManageAccount = () => {
    window.location.href = "/manageaccount";
  };

  const handleTicketDisplay = () => {
    window.location.href = "/ticketdisplay";
  };

  const handleTicketCreation = () => {
    window.location.href = "/ticketcreation";
  };

  return (
    <Box
      sx={{ position: "fixed", top: 16, right: 16, display: "flex", gap: 2 }}
    >
      <Tooltip title="Sign Out" arrow placement="left">
        <IconButton onClick={handleSignOut}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Manage Account" arrow placement="left">
        <IconButton onClick={handleManageAccount}>
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Ticket Display" arrow placement="left">
        <IconButton onClick={handleTicketDisplay}>
          <ViewListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Ticket Creation" arrow placement="left">
        <IconButton onClick={handleTicketCreation}>
          <AddBoxIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SignOutButtonUser;
