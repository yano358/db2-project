from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session

from app.models.luggage import Luggage, LuggageCreate
from app.crud.crud_luggage import crud_luggage

router = APIRouter()

@router.post("", response_model=Luggage)
async def create_luggage(
    luggage_in: LuggageCreate,
    session: Session = Depends(get_session),
) -> Luggage:
    luggage = crud_luggage.create(session, obj_in=luggage_in)
    return luggage

@router.delete("/{luggage_id}", response_model=None)
async def delete_luggage(
    luggage_id: int,
    session: Session = Depends(get_session),
) -> None:
    crud_luggage.remove(session, id=luggage_id)
    return None

@router.get("", response_model=list[Luggage])
async def get_all_luggage(
    session: Session = Depends(get_session),
) -> list[Luggage]:
    luggage = crud_luggage.get_all(session)
    return luggage