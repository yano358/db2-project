"use client";
import React, { use, useEffect } from "react";
import {
  useGetForClientApiV1TicketscustomresponseGetQuery,
  CustomTicketResponse,
} from "@/lib/redux/api/tickets";
import { Card, CardContent, Typography, Grid, makeStyles } from "@mui/material";

interface TicketListProps {
  clientId: number;
}

const TicketList: React.FC<TicketListProps> = ({ clientId }) => {
  const {
    data: ticketData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetForClientApiV1TicketscustomresponseGetQuery({ userId: clientId });

  useEffect(() => {
    // Fetch ticket data for the given client ID
    refetch();
  }, [clientId, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //const classes = useStyles();

  return (
    <div>
      <h2>Ticket List for Client ID: {clientId}</h2>
      {ticketData &&
        ticketData.map((ticket: CustomTicketResponse) => (
          <Card
            key={ticket.flight_details.id}
            //className={classes.root}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Flight ID: {ticket.flight_details.id} - Price:{" "}
                {ticket.flight_details.price}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>
                    Luggage Type: {ticket.luggage_details.luggage_type}
                  </Typography>
                  <Typography>
                    Departure Time: {ticket.flight_details.departure_time}
                  </Typography>
                  <Typography>
                    Arrival Time: {ticket.flight_details.arrival_time}
                  </Typography>
                  <Typography>
                    Seat ID: {ticket.seat_details.id} - Class Type:{" "}
                    {ticket.seat_details.class_type}
                  </Typography>
                  {/* Add more details here based on your requirement */}
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Client: {ticket.client_details.first_name}{" "}
                    {ticket.client_details.last_name}
                  </Typography>
                  <Typography>
                    Address: {ticket.client_details.address},{" "}
                    {ticket.client_details.city},{" "}
                    {ticket.client_details.country},{" "}
                    {ticket.client_details.postal_code}
                  </Typography>
                  <Typography>
                    Plane: {ticket.plane_details.airline} -{" "}
                    {ticket.plane_details.model}
                  </Typography>
                  <Typography>
                    From: {ticket.start_airport_details.name},{" "}
                    {ticket.start_airport_details.city},{" "}
                    {ticket.start_airport_details.country}
                  </Typography>
                  <Typography>
                    To: {ticket.destination_airport_details.name},{" "}
                    {ticket.destination_airport_details.city},{" "}
                    {ticket.destination_airport_details.country}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default TicketList;
