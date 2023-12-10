from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session

from app.models.airports import Airports, AirportsCreate
from app.crud.crud_airports import crud_airports

router = APIRouter()

@router.post("", response_model=Airports)
async def create_airport(
    airport_in: AirportsCreate,
    session: Session = Depends(get_session),
) -> Airports:
    airport = crud_airports.create(session, obj_in=airport_in)
    return airport

@router.delete("/{airport_id}", response_model=None)
async def delete_airport(
    airport_id: int,
    session: Session = Depends(get_session),
) -> None:
    crud_airports.remove(session, id=airport_id)
    return None
