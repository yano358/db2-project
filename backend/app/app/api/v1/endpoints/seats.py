from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session


from app.core.db import get_session
from app.models.seats import Seats, SeatsCreate, SeatsUpdate


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


@router.get("", response_model=list[Seats])
async def get_all_seats(
    session: Session = Depends(get_session),
) -> list[Seats]:
    seats = crud_seats.get_all(session)
    return seats

@router.get("{flight_id}", response_model=list[Seats])
async def get_seats_for_flight(
    flight_id: int,
    session: Session = Depends(get_session),
) -> list[Seats]:
    seats = crud_seats.get_seats_for_plane(session, flight_id)
    return seats

@router.put("/{seat_id}", response_model=Seats)
def update_seat(
    seat_id: int,
    seat_update: SeatsUpdate,
    db: Session = Depends(get_session),
) -> Seats:
    seat = crud_seats.get(db, id=seat_id)
    if not seat:
        raise HTTPException(status_code=404, detail="Seat not found")

    # Update the seat using the provided data
    seat = crud_seats.update(db, db_obj=seat, obj_in=seat_update)
    return seat
    