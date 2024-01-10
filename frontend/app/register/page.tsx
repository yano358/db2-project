import React from "react";
import UserRegistration from "../components/RegistrationComponent";
import { Typography } from "@mui/material";

const ParentComponent: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Arial",
          textAlign: "center",
          fontWeight: "bold",
          color: "#009688",
          paddingY: 2,
        }}
      >
        User Registration
      </Typography>
      <UserRegistration />
    </div>
  );
};

export default ParentComponent;
