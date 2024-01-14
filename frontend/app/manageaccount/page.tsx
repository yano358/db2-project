"use client";
import React, { useEffect, useState } from "react";

import {
  useGetForCurrentUserApiV1ClientsgetClientsForCurrentGetQuery,
  Clients,
} from "@/lib/redux/api/clients";

import { Button } from "@mui/material";
import ClientDetails from "../components/DisplayEditClientComponent";
import SignOutButtonUser from "../components/ButtonGroupUserComponent";
import RegisterClient from "../components/RegisterClientComponent";

const ClientList: React.FC = () => {
  const {
    data: clientsData,
    isLoading,
    refetch,
  } = useGetForCurrentUserApiV1ClientsgetClientsForCurrentGetQuery();

  const [openRegistration, setOpenRegistration] = useState(false);

  const handleOpenRegistration = () => {
    setOpenRegistration(true);
  };

  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const clients = clientsData;

  return (
    <div>
      {clients.map((client: Clients) => (
        <ClientDetails
          key={client.id}
          client={{
            id: client.id,
            first_name: client.first_name,
            last_name: client.last_name,
            country: client.country,
            city: client.city,
            address: client.address,
            postal_code: client.postal_code,
          }}
          refetch={refetch}
        />
      ))}
      ;<RegisterClient></RegisterClient>
      <SignOutButtonUser />
    </div>
  );
};

export default ClientList;
