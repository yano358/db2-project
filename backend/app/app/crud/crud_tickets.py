from app.crud.base import CRUDBase
from app.models.tickets import Tickets, TicketsCreate, TicketsUpdate


class CRUDTickets(CRUDBase[Tickets, TicketsCreate, TicketsUpdate]):
    def get_for_user(self, db, user_id: int):
        return db.query(self.model).filter(Tickets.client_id == user_id).all()
    
    def get_all(self, db):
        return db.query(self.model).all()

crud_tickets = CRUDTickets(Tickets)