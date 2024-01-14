from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session

from app.models.flights import Flights, FlightsCreate, CustomFlights
from app.crud.crud_flights import crud_flights
from app.crud.crud_planes import crud_planes
from app.crud.crud_airports import crud_airports


router = APIRouter()

@router.post("", response_model=Flights)
async def create_flight(
    flights_in: FlightsCreate,
    session: Session = Depends(get_session),
) -> Flights:
    flights = crud_flights.create(session, obj_in=flights_in)
    return flights

@router.delete("/{flight_id}/", response_model=None)
async def delete_flight(
    flight_id: int,
    session: Session = Depends(get_session),
) -> None:
    crud_flights.remove(session, id=flight_id)
    return None

@router.get("", response_model=list[Flights])
async def get_all_flights(
    session: Session = Depends(get_session),
) -> list[Flights]:
    flights = crud_flights.get_all(session)
    return flights

@router.get("customFlightResponse", response_model=list[CustomFlights])
async def get_custom_flights(
    session: Session = Depends(get_session),
) -> list[CustomFlights]:
    flights = crud_flights.get_all(session)
    custom_flights = []
    for flight in flights:
        custom_flight = CustomFlights(
            id=flight.id,
            price=flight.price,
            departure_time=flight.departure_time,
            arrival_time=flight.arrival_time,
            plane_details=crud_planes.get(session, id=flight.plane_id),
            start_airport_details=crud_airports.get(session, id=flight.start_airport_id),
            destination_airport_details=crud_airports.get(session, id=flight.destination_airport_id),
        )
        custom_flights.append(custom_flight)
    return custom_flights