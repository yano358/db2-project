from app.crud.base import CRUDBase
from app.models.tickets import Tickets, TicketsCreate, TicketsUpdate
from sqlalchemy.orm import Session
from sqlalchemy import or_


class CRUDTickets(CRUDBase[Tickets, TicketsCreate, TicketsUpdate]):
    def get_for_user(self, db, client: int):
        return db.query(self.model).filter(Tickets.client_id == client).all()
    
    def get_all(self, db):
        return db.query(self.model).all()
    
    def get_filtered_tickets(self, db: Session, flight_id: int = None, user_id: int = None , luggage_id: int = None):
        query = db.query(self.model)
        if flight_id is not None:
            query = query.filter(Tickets.flight_id == flight_id)
        if user_id is not None:
            query = query.filter(Tickets.client_id == user_id)
        if luggage_id is not None:
            query = query.filter(Tickets.luggage_id == luggage_id)
        
        return query.with_entities(Tickets.id).all()


crud_tickets = CRUDTickets(Tickets)