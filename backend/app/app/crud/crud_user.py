from typing import Optional
from sqlmodel import Session, select
from app.models.user import User, UserCreate, UserUpdate
from app.core.security import get_password_hash, verify_password
from app.crud.base import CRUDBase


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def get_all(self, db: Session) -> list[User]:
        return db.exec(select(User)).all()

    def get_by_email(self, db: Session, *, email: str) -> Optional[User]:
        return db.exec(select(User).where(User.email == email)).first()

    def create(self, db: Session, *, obj_in: UserCreate) -> User:
        user_obj = User(
            **obj_in.dict(),
            hashed_password=get_password_hash(obj_in.password),
        )
        db.add(user_obj)
        db.commit()
        db.refresh(user_obj)
        return user_obj

    def authenticate(
        self, db: Session, *, email: str, password: str
    ) -> Optional[User]:
        user = self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user


crud_user = CRUDUser(User)
