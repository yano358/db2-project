"use client";
import React, { useState, useEffect, use } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  Flights,
  useGetAllFlightsApiV1FlightsGetQuery,
} from "@/lib/redux/api/flights";
import {
  Airports,
  useReadAllAirportsApiV1AirportsreadAllGetQuery,
} from "@/lib/redux/api/airports";

interface SelectableFlightProps {
  label: string;
  onChange: (selectedFlightId: [string, string]) => void;
}

const SelectableFlightComponent: React.FC<SelectableFlightProps> = ({
  onChange,
  label,
}) => {
  const [flightsData, setFlightsData] = useState<Flights[]>([]);
  const [airportsData, setAirportsData] = useState<Airports[]>([]);
  const { data: fetchedFlights, isLoading: flightsLoading } =
    useGetAllFlightsApiV1FlightsGetQuery();
  const { data: fetchedAirports } =
    useReadAllAirportsApiV1AirportsreadAllGetQuery();

  useEffect(() => {
    if (fetchedFlights) {
      setFlightsData(fetchedFlights);
    }
  }, [fetchedFlights]);

  useEffect(() => {
    if (fetchedAirports) {
      setAirportsData(fetchedAirports);
    }
  }, [fetchedAirports]);

  const getAirportNameById = (airportId: number | undefined) => {
    const airport = airportsData.find((airport) => airport.id === airportId);
    return airport
      ? `${airport.name} - ${airport.city}, ${airport.country}`
      : "Unknown Airport";
  };

  const handleFlightChange = (event: SelectChangeEvent<typeof undefined>) => {
    const selectedFlightId = event.target.value as string;
    const [flightId, planeId] = selectedFlightId.split("_");
    onChange([flightId, planeId]);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select onChange={handleFlightChange}>
        {flightsLoading && <MenuItem disabled>Loading...</MenuItem>}
        {flightsData.map((flight) => (
          <MenuItem key={flight.id} value={`${flight.id}_${flight.plane_id}`}>
            Price: {flight.price} - Route:{" "}
            {getAirportNameById(flight.start_airport_id)} to{" "}
            {getAirportNameById(flight.destination_airport_id)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectableFlightComponent;
