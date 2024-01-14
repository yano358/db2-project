from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session
from app.models.tickets import CustomTicketResponse

from app.models.tickets import Tickets, TicketsCreate
from app.models.user import User
from app.models.clients import Clients

from app.crud.crud_tickets import crud_tickets

from app.crud.crud_luggage import crud_luggage
from app.crud.crud_flights import crud_flights
from app.crud.crud_seats import crud_seats
from app.crud.crud_clients import crud_clients
from app.crud.crud_planes import crud_planes
from app.crud.crud_airports import crud_airports
from app.dependencies.auth import get_current_user

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
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> list[CustomTicketResponse]:
    clients_of_user:list[Clients] = crud_clients.get_all_for_user(session, user_id=current_user.id)

    custom_tickets = []
    for client in clients_of_user:
        tickets = crud_tickets.get_for_user(session, client=client.id)
        for ticket in tickets:
            flight_details = crud_flights.get(session, id=ticket.flight_id)
            
            custom_ticket = CustomTicketResponse(
                luggage_details=crud_luggage.get(session, id=ticket.luggage_id),
                flight_details=crud_flights.get(session, id=ticket.flight_id),
                seat_details=crud_seats.get(session, id=ticket.seat_id),
                client_details=crud_clients.get(session, id=ticket.client_id),
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

@router.get("getFilteredTickets", response_model=list[CustomTicketResponse])
async def get_filtered_tickets(
    flight_id: int = None,
    client_id: int = None,
    luggage_id: int = None,
    session: Session = Depends(get_session),
) -> list[CustomTicketResponse]:
    tickets = crud_tickets.get_filtered_tickets(session, flight_id=flight_id, user_id=client_id, luggage_id=luggage_id)
    ids = []
    custom_tickets = []
    for ticket in tickets:
        ids.append(ticket.id)
    
    for id in ids:
        response = crud_tickets.get(session, id=id)
        flight_details = crud_flights.get(session, id=response.flight_id)

        custom_ticket = CustomTicketResponse(
            luggage_details=crud_luggage.get(session, id=response.luggage_id),
            flight_details=crud_flights.get(session, id=response.flight_id),
            seat_details=crud_seats.get(session, id=response.seat_id),
            client_details=crud_clients.get(session, id=response.client_id),
            plane_details=crud_planes.get(session, id=flight_details.plane_id),
            start_airport_details=crud_airports.get(session, id=flight_details.start_airport_id),
            destination_airport_details=crud_airports.get(session, id=flight_details.destination_airport_id),
        )
        custom_tickets.append(custom_ticket)

    return custom_tickets
        
    
