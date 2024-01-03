from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.db import get_session

from app.models.tickets import Tickets
from app.crud.crud_tickets import crud_tickets

router = APIRouter()

