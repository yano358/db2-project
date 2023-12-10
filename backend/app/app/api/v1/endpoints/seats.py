from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session
from app.models.seats import Seats, SeatsCreate

from app.crud.crud_seats import crud_seats

router = APIRouter()

@router.post("", response_model=Seats)
async def create_seat(
    seats_in: SeatsCreate,
    session: Session = Depends(get_session),
) -> Seats:
    seats = crud_seats.create(session, obj_in=seats_in)
    return seats

@router.delete("/{seat_id}/", response_model=None)
async def delete_seat(
    seat_id: int,
    session: Session = Depends(get_session),
) -> None:
    crud_seats.remove(session, id=seat_id)
    return None