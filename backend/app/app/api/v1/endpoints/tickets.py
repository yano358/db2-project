from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session
from app.models.tickets import CustomTicketResponse

from app.models.tickets import Tickets, TicketsCreate

from app.crud.crud_tickets import crud_tickets

from app.crud.crud_luggage import crud_luggage
from app.crud.crud_flights import crud_flights
from app.crud.crud_seats import crud_seats
from app.crud.crud_clients import crud_clients
from app.crud.crud_planes import crud_planes
from app.crud.crud_airports import crud_airports

router = APIRouter()

@router.post("", response_model=Tickets)
async def create(
    ticket: TicketsCreate,
    session: Session = Depends(get_session),
) -> Tickets:
    ticket = crud_tickets.create(session, obj_in=ticket)
    return ticket

@router.get("/all", response_model=list[Tickets])
async def get_all(
    session: Session = Depends(get_session),
) -> list[Tickets]:
    tickets = crud_tickets.get_all(session)
    return tickets


@router.get("customresponse", response_model=list[CustomTicketResponse])
async def get_for_client(
    user_id: int,
    session: Session = Depends(get_session),
) -> list[CustomTicketResponse]:
    tickets = crud_tickets.get_for_user(session, user_id=user_id)
    custom_tickets = []

    for ticket in tickets:
        flight_details = crud_flights.get(session, id=ticket.flight_id)
        
        custom_ticket = CustomTicketResponse(
            luggage_details=crud_luggage.get(session, id=ticket.luggage_id),
            flight_details=crud_flights.get(session, id=ticket.flight_id),
            seat_details=crud_seats.get(session, id=ticket.seat_id),
            client_details=crud_clients.get_by_user_id(session, user_id=ticket.client_id),
            plane_details=crud_planes.get(session, id=flight_details.plane_id),
            start_airport_details=crud_airports.get(session, id=flight_details.start_airport_id),
            destination_airport_details=crud_airports.get(session, id=flight_details.destination_airport_id),
        )
        custom_tickets.append(custom_ticket)

    return custom_tickets

@router.delete("/{id}")
async def delete(
    id: int,
    session: Session = Depends(get_session),
) -> None:
    crud_tickets.remove(session, id=id)
    return None
