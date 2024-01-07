import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  useCreateApiV1TicketsPostMutation,
  TicketsCreate,
} from "@/lib/redux/api/tickets";
import {
  useUpdateSeatApiV1SeatsSeatIdPutMutation,
  UpdateSeatApiV1SeatsSeatIdPutApiArg,
} from "@/lib/redux/api/seats"; // Import the update seat API hook

interface TicketCreationButtonProps {
  flightId: string;
  seatId: string;
  luggageId: string;
}

const TicketCreationButton: React.FC<TicketCreationButtonProps> = ({
  flightId,
  seatId,
  luggageId,
}) => {
  const [createTicketMutation] = useCreateApiV1TicketsPostMutation();
  const [updateSeatMutation] = useUpdateSeatApiV1SeatsSeatIdPutMutation(); // Initialize the seat update mutation hook

  const [ticketsCreate, setTicketsCreate] = useState<TicketsCreate>({
    flight_id: 0,
    seat_id: 0,
    luggage_id: 0,
    client_id: 6,
  });

  const handleCreateTicket = async () => {
    try {
      ticketsCreate.flight_id = parseInt(flightId);
      ticketsCreate.seat_id = parseInt(seatId);
      ticketsCreate.luggage_id = parseInt(luggageId);
      ticketsCreate.client_id = 6;

      const response = await createTicketMutation({
        ticketsCreate: ticketsCreate,
      });

      await updateSeatMutation({
        seatId: parseInt(seatId),
        seatsUpdate: { taken_status: true },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" onClick={handleCreateTicket}>
      Create Ticket
    </Button>
  );
};

export default TicketCreationButton;
