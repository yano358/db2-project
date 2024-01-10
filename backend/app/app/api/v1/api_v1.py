from fastapi import APIRouter

from app.api.v1.endpoints.login import router as login_router
from app.api.v1.endpoints.users import router as users_router

from app.api.v1.endpoints.planes import router as planes_router
from app.api.v1.endpoints.airports import router as airports_router
from app.api.v1.endpoints.luggage import router as luggage_router

from app.api.v1.endpoints.clients import router as clients_router
from app.api.v1.endpoints.flights import router as flights_router
from app.api.v1.endpoints.tickets import router as tickets_router
from app.api.v1.endpoints.seats import router as seats_router



api_v1_router = APIRouter()

api_v1_router.include_router(users_router, prefix="/users", tags=["users"])
api_v1_router.include_router(login_router, prefix="/login", tags=["login"])

api_v1_router.include_router(planes_router, prefix="/planes", tags=["planes"])
api_v1_router.include_router(airports_router, prefix="/airports", tags=["airports"])
api_v1_router.include_router(luggage_router, prefix="/luggage", tags=["luggage"])

api_v1_router.include_router(clients_router, prefix="/clients", tags=["clients"])
api_v1_router.include_router(flights_router, prefix="/flights", tags=["flights"])
api_v1_router.include_router(tickets_router, prefix="/tickets", tags=["tickets"])
api_v1_router.include_router(seats_router, prefix="/seats", tags=["seats"])
