import React from "react";
import TicketList from "../components/TicketDisplayComponent";

const ParentComponent = () => {
  // Assuming client ID is 6
  const clientId = 6;

  return (
    <div>
      <h1>Ticket Information</h1>
      <TicketList clientId={clientId} />
    </div>
  );
};

export default ParentComponent;
