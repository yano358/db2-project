from app.crud.base import CRUDBase
from app.models.tickets import Tickets, TicketsCreate, TicketsUpdate

class CRUDTickets(CRUDBase[Tickets, TicketsCreate, TicketsUpdate]):
    pass

crud_tickets = CRUDTickets(Tickets)