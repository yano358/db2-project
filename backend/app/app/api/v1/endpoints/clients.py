from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session

from app.core.db import get_session


from app.models.clients import Clients, ClientsCreate, ClientsUpdate
from app.models.user import User
from app.crud.crud_clients import crud_clients
from app.dependencies.auth import get_current_user


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

@router.get("getClientsForCurrent", response_model=list[Clients])
async def get_for_current_user(
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> list[Clients]:
    clients = crud_clients.get_all_for_user(session, user_id=current_user.id)
    clients_list = []
    for client in clients:
        clients_list.append(client)
    return clients_list

@router.patch("/{user_id}", response_model=Clients)
async def update_client(
    user_id: int,
    clients_update: ClientsUpdate,
    session: Session = Depends(get_session),
) -> Clients:
    clients = crud_clients.get(session, id=user_id)
    if not clients:
        raise HTTPException(status_code=404, detail="Client not found")

    # Update the client using the provided data
    clients = crud_clients.update(session, db_obj=clients, obj_in=clients_update)
    return clients