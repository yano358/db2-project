from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session

from app.models.flights import Flights, FlightsCreate
from app.crud.crud_flights import crud_flights

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