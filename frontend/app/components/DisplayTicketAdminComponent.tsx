import React from "react";
import { CustomTicketResponse } from "@/lib/redux/api/tickets";
import { Paper, Typography, Divider } from "@mui/material";

type TicketDisplayProps = {
  ticket: CustomTicketResponse;
};

const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket }) => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 16 }}>
      <Typography variant="h6">Ticket Details</Typography>
      <Divider style={{ margin: "8px 0" }} />

      <Typography>
        <strong>Client:</strong> {ticket.client_details.first_name}{" "}
        {ticket.client_details.last_name}
      </Typography>
      <Typography>
        <strong>Flight:</strong>
        {ticket.flight_details.departure_time} -{" "}
        {ticket.flight_details.arrival_time}
        {ticket.start_airport_details.city} ,{" "}
        {ticket.start_airport_details.country} -{" "}
        {ticket.destination_airport_details.city} ,{" "}
        {ticket.destination_airport_details.country}
        {ticket.plane_details.airline} - {ticket.plane_details.model}
        {ticket.seat_details.class_type} - {ticket.seat_details.id}
      </Typography>
      <Typography>
        <strong>Luggage:</strong> {ticket.luggage_details.luggage_type}
      </Typography>

      <Typography>
        <strong>Price:</strong> {ticket.flight_details.price}
      </Typography>
    </Paper>
  );
};

export default TicketDisplay;
