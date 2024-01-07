from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session

from app.models.clients import Clients, ClientsCreate
from app.crud.crud_clients import crud_clients


router = APIRouter()

@router.post("", response_model=Clients)
async def create_client(
    clients_in: ClientsCreate,
    session: Session = Depends(get_session),
) -> Clients:
    clients = crud_clients.create(session, obj_in=clients_in)
    return clients

@router.delete("/{user_id}/", response_model=None)
async def delete_client(
    user_id: int,
    session: Session = Depends(get_session),
) -> None:
    crud_clients.remove(session, id=user_id)
    return None

@router.get("", response_model=list[Clients])
async def get_all_clients(
    session: Session = Depends(get_session),
) -> list[Clients]:
    clients = crud_clients.get_all(session)
    return clients