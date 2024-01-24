from decimal import Decimal

from pydantic import BaseModel

from ..enums import ProductStatuses


class Product(BaseModel):
    id: str
    user_id: str
    name: str
    description: str | None
    price: Decimal
    location: str
    status: ProductStatuses
    is_available: bool
