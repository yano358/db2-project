import React from "react";
import TicketList from "../components/TicketDisplayComponent";
import SignOutButtonUser from "../components/ButtonGroupUserComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Ticket Information</h1>
      <TicketList />
      <SignOutButtonUser />
    </div>
  );
};

export default ParentComponent;
