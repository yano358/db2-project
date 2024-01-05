from typing import Optional

from app.crud.base import CRUDBase
from app.models.clients import Clients, ClientsCreate, ClientsUpdate

class CRUDClients(CRUDBase[Clients, ClientsCreate, ClientsUpdate]):
    pass

crud_clients = CRUDClients(Clients)