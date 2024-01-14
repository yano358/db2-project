"use client";
import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import ClientRegistrationForm from "@/app/components/ClientRegistrationComponent";
import { useGetCurrentUserApiV1UsersUserGetQuery } from "@/lib/redux/api/users";

const RegisterClient: React.FC = () => {
  const [openRegistration, setOpenRegistration] = useState(false);

  const handleOpenRegistration = () => {
    setOpenRegistration(true);
  };

  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };

  const { data: currentUserData } = useGetCurrentUserApiV1UsersUserGetQuery();
  if (!currentUserData) {
    return <div>Loading...</div>;
  }
  const userID = currentUserData.id;

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpenRegistration}
      >
        Register New Client
      </Button>

      <ClientRegistrationForm
        user_id={userID}
        open={openRegistration}
        onClose={handleCloseRegistration}
      />
    </div>
  );
};

export default RegisterClient;
