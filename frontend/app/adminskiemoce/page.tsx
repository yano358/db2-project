"use client";
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  useCreatePlanesApiV1PlanesPostMutation,
  PlanesCreate,
} from "@/lib/redux/api/planes";

import {
  useCreateAirportApiV1AirportsPostMutation,
  AirportsCreate,
} from "@/lib/redux/api/airports";

import {
  useCreateFlightApiV1FlightsPostMutation,
  FlightsCreate,
} from "@/lib/redux/api/flights";

import {
  useCreateSeatApiV1SeatsPostMutation,
  SeatsCreate,
} from "@/lib/redux/api/seats";

import SelectablePlaneComponent from "../components/SelectablePlaneComponent";
import SelectableAirportComponent from "../components/SelectableAirportComponent";
import DateTimePicker from "../components/DateTimePicker";
import { Dayjs } from "dayjs";

const CreatePlaneComponent: React.FC = () => {
  const [selectedDate, setDateChange] = useState<Dayjs | null>(null);
  const handleDateChange = (selectedDate: Dayjs | null) => {
    setDateChange(selectedDate);
  };

  const [selectedDateArrival, setDateChangeArrival] = useState<Dayjs | null>(
    null
  );
  const handleDateChangeArrival = (selectedDateArrival: Dayjs | null) => {
    setDateChangeArrival(selectedDateArrival);
  };

  const [selectedPlane, setSelectedPlane] = useState<number | string>("");
  const handlePlaneChange = (selectedPlaneId: number | string) => {
    setSelectedPlane(selectedPlaneId);
  };

  const [selectedDestinationAirport, setSelectedDestinationAirport] = useState<
    number | string
  >("");
  const handleDestinationAirportChange = (
    selectedAirportId: number | string
  ) => {
    setSelectedDestinationAirport(selectedAirportId);
  };

  const [selectedStartAirport, setSelectedStartAirport] = useState<
    number | string
  >("");
  const handleStartAirportChange = (selectedAirportId: number | string) => {
    setSelectedStartAirport(selectedAirportId);
  };

  const [planeData, setPlaneData] = useState<PlanesCreate>({
    model: "",
    airline: "",
  });
  const [createPlaneMutation] = useCreatePlanesApiV1PlanesPostMutation();

  const [airportData, setAirportData] = useState<AirportsCreate>({
    name: "",
    city: "",
    country: "",
  });
  const [createAirportMutation] = useCreateAirportApiV1AirportsPostMutation();

  const [flightData, setFlightData] = useState<FlightsCreate>({
    price: "",
    departure_time: "",
    arrival_time: "",
    start_airport_id: 0,
    destination_airport_id: 0,
    plane_id: 0,
  });
  const [createFlightMutation] = useCreateFlightApiV1FlightsPostMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlaneData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeAirport = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setAirportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeFlight = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFlightData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = async () => {
    try {
      const response = await createPlaneMutation({ planesCreate: planeData });
      setPlaneData({ model: "", airline: "" });
    } catch (error) {
      console.error("Error creating plane:", error);
    }
  };

  const handleButtonClickAirport = async () => {
    try {
      const response = await createAirportMutation({
        airportsCreate: airportData,
      });
      setAirportData({ name: "", city: "", country: "" });
    } catch (error) {
      console.error("Error creating plane:", error);
    }
  };

  const handleButtonClickFlight = async () => {
    try {
      flightData.departure_time = selectedDate.toISOString();
      flightData.arrival_time = selectedDateArrival.toISOString();
      flightData.plane_id = Number(selectedPlane);
      flightData.start_airport_id = Number(selectedStartAirport);
      flightData.destination_airport_id = Number(selectedDestinationAirport);
      const response = await createFlightMutation({
        flightsCreate: flightData,
      });
    } catch (error) {
      console.error("Error creating plane:", error);
    }
  };

  const [seatData, setSeatData] = useState<SeatsCreate>({
    plane_id: 0,
    class_type: "Economy",
    taken_status: false,
  });

  const handlePlaneSeatChange = (selectedPlaneSeatId: number | string) => {
    setSeatData((prevData) => ({
      ...prevData,
      plane_id: Number(selectedPlaneSeatId),
    }));
  };

  const [createSeatMutation] = useCreateSeatApiV1SeatsPostMutation();
  const handleButtonClickSeat = async () => {
    seatData.class_type = "Economy";
    seatData.taken_status = false;
    try {
      const response = await createSeatMutation({
        seatsCreate: seatData,
      });
    } catch (error) {
      console.error("Error creating plane:", error);
    }
  };

  return (
    <>
      <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
        <TextField
          label="Model"
          name="model"
          value={planeData.model}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Airline"
          name="airline"
          value={planeData.airline}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleButtonClick}
          disabled={!planeData.model || !planeData.airline}
        >
          Create Plane
        </Button>
      </Box>

      <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
        <TextField
          label="Name"
          name="name"
          value={airportData.name}
          onChange={handleInputChangeAirport}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="City"
          name="city"
          value={airportData.city}
          onChange={handleInputChangeAirport}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Country"
          name="country"
          value={airportData.country}
          onChange={handleInputChangeAirport}
          fullWidth
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleButtonClickAirport}
          disabled={
            !airportData.name || !airportData.city || !airportData.country
          }
        >
          Create Airport
        </Button>
      </Box>

      <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
        <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
          <SelectablePlaneComponent onChange={handlePlaneChange} />
        </Box>

        <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
          <SelectableAirportComponent
            onChange={handleStartAirportChange}
            label="Select Start Airport"
          />
        </Box>

        <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
          <SelectableAirportComponent
            onChange={handleDestinationAirportChange}
            label="Select Destination Airport"
          />
        </Box>

        <TextField
          label="ticketPrice"
          name="price"
          value={flightData.price}
          onChange={handleInputChangeFlight}
          fullWidth
          variant="outlined"
          type="number"
          inputProps={{
            min: 0,
            step: "any",
          }}
        />

        <DateTimePicker
          label="Departure Time"
          onChange={handleDateChange}
          selectedDate={selectedDate}
        />
        <DateTimePicker
          label="Arrival Time"
          onChange={handleDateChangeArrival}
          selectedDate={selectedDateArrival}
        />

        <Button
          variant="contained"
          onClick={handleButtonClickFlight}
          disabled={
            !flightData.price ||
            flightData.price < 0 ||
            !selectedDate ||
            !selectedDateArrival ||
            !selectedPlane ||
            !selectedDestinationAirport ||
            !selectedStartAirport ||
            selectedDate > selectedDateArrival
          }
        >
          Create Flight
        </Button>
      </Box>

      <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
        <SelectablePlaneComponent onChange={handlePlaneSeatChange} />
        <Button variant="contained" onClick={handleButtonClickSeat}>
          Add Seat to Selected Plane
        </Button>
      </Box>
    </>
  );
};

export default CreatePlaneComponent;
