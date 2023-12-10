from app.crud.base import CRUDBase
from app.models.flights import Flights, FlightsCreate, FlightsUpdate

class CRUDFlights(CRUDBase[Flights, FlightsCreate, FlightsUpdate]):
    pass

crud_flights = CRUDFlights(Flights)