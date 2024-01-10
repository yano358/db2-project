import React from "react";
import TicketList from "../components/TicketDisplayComponent";
import SignOutButton from "../components/SignOutComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Ticket Information</h1>
      <TicketList />
      <SignOutButton />
    </div>
  );
};

export default ParentComponent;
