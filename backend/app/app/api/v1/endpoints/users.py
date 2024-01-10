from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.models.user import User, UserCreate
from app.crud.crud_user import crud_user
from app.core.db import get_session
from app.dependencies.auth import get_current_user

router = APIRouter()

@router.get("", response_model=list[User])
async def read_users(
    db_session: Session = Depends(get_session),
) -> list[User]:
    users = crud_user.get_all(db=db_session)
    return users

@router.post("", response_model=User)
async def create_user(
    user_in: UserCreate,
    db_session: Session = Depends(get_session),
) -> User:
    user = crud_user.create(db=db_session, obj_in=user_in)
    return user

@router.get("{email}", response_model=User)
async def read_user_by_email(
    email: str,
    db_session: Session = Depends(get_session),
) -> User:
    user = crud_user.get_by_email(db=db_session, email=email)
    return user


@router.delete("/{user_id}", response_model=None)
async def delete_user(
    user_id: int,
    db_session: Session = Depends(get_session),
) -> None:
    crud_user.remove(db=db_session, id=user_id)
    return None


@router.get("/user")
async def get_current_user(user: User = Depends(get_current_user)):
  return user