"use client";
import React, { useState } from "react";
import {
  useGetFilteredTicketsApiV1TicketsgetFilteredTicketsGetQuery,
  CustomTicketResponse,
} from "@/lib/redux/api/tickets";
import {
  useGetAllClientsApiV1ClientsGetQuery,
  Clients,
} from "@/lib/redux/api/clients";
import {
  useGetCustomFlightsApiV1FlightscustomFlightResponseGetQuery,
  CustomFlights,
} from "@/lib/redux/api/flights";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import TicketDisplay from "../components/DisplayTicketAdminComponent";
import SignOutButton from "../components/SignOutComponent";

const DisplayFilteredTickets: React.FC = () => {
  const [clientIdFilter, setClientIdFilter] = useState<number | undefined>(
    undefined
  );
  const [luggageIdFilter, setLuggageIdFilter] = useState<number | undefined>(
    undefined
  );
  const [flightIdFilter, setFlightIdFilter] = useState<number | undefined>();

  const { data: clientsData } = useGetAllClientsApiV1ClientsGetQuery();
  const { data: flightsData } =
    useGetCustomFlightsApiV1FlightscustomFlightResponseGetQuery();

  const handleClientFilterChange = (
    event: SelectChangeEvent<number | string>
  ) => {
    setClientIdFilter(event.target.value as number);
  };

  const handleLuggageFilterChange = (
    event: SelectChangeEvent<number | string>
  ) => {
    setLuggageIdFilter(event.target.value as number);
  };

  const handleFlightFilterChange = (
    event: SelectChangeEvent<number | string>
  ) => {
    setFlightIdFilter(event.target.value as number);
  };

  const { data: filteredTickets, isLoading } =
    useGetFilteredTicketsApiV1TicketsgetFilteredTicketsGetQuery({
      clientId: clientIdFilter,
      luggageId: luggageIdFilter,
      flightId: flightIdFilter,
    });

  return (
    <div>
      <SignOutButton />

      <FormControl>
        <InputLabel id="client-filter-label">Filter by Client</InputLabel>
        <Select
          labelId="client-filter-label"
          id="client-filter"
          value={clientIdFilter}
          onChange={handleClientFilterChange}
        >
          <MenuItem value={undefined}>All Clients</MenuItem>
          {clientsData?.map((client: Clients) => (
            <MenuItem key={client.id} value={client.id}>
              {client.first_name} {client.last_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl style={{ marginLeft: 30 }}>
        <InputLabel id="luggage-filter-label">Filter by Luggage</InputLabel>
        <Select
          labelId="luggage-filter-label"
          id="luggage-filter"
          value={luggageIdFilter}
          onChange={handleLuggageFilterChange}
        >
          <MenuItem value={undefined}>All Luggage</MenuItem>
          <MenuItem value={2}>Carry On</MenuItem>
          <MenuItem value={3}>Check-In</MenuItem>
          <MenuItem value={4}>Both</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="flight-filter-label">Filter by Client</InputLabel>
        <Select
          labelId="flight-filter-label"
          id="flight-filter"
          value={flightIdFilter}
          onChange={handleFlightFilterChange}
        >
          <MenuItem value={undefined}>All Flights</MenuItem>
          {flightsData?.map((flight: CustomFlights) => (
            <MenuItem key={flight.id} value={flight.id}>
              {flight.start_airport_details.city}{" "}
              {flight.start_airport_details.country} to{" "}
              {flight.destination_airport_details.city}{" "}
              {flight.destination_airport_details.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {filteredTickets?.map((ticket: CustomTicketResponse) => (
            <TicketDisplay key={ticket.seat_details.id} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayFilteredTickets;
