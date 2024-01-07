from typing import Optional
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.clients import Clients, ClientsCreate, ClientsUpdate

class CRUDClients(CRUDBase[Clients, ClientsCreate, ClientsUpdate]):
    def get_all(self, db: Session):
        return db.query(self.model).all()
    
    def get_by_user_id(self, db: Session, user_id: int):
        return db.query(self.model).filter(self.model.user_id == user_id).first()

crud_clients = CRUDClients(Clients)