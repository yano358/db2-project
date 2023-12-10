from typing import Optional

from app.crud.base import CRUDBase
from app.models.clients import Clients, ClientsCreate, ClientsUpdate

class CRUDClients(CRUDBase[Clients, ClientsCreate, ClientsUpdate]):

    def create_for_user(self, session, *, obj_in: ClientsCreate, user_id: int) -> Clients:
        user_item = Clients(**obj_in.dict(), id=user_id)

        session.add(user_item)
        session.commit()
        session.refresh(user_item)
        return user_item

crud_clients = CRUDClients(Clients)