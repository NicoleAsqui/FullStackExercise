from fastapi import APIRouter, Depends

from app.products.core.enums import ProductStatuses
from app.products.factories import get_products_case
from app.products.use_cases import GetProductsReponse, GetProductsRequest

product_router = APIRouter(prefix="/products")


@product_router.get("/", response_model=GetProductsReponse)
async def get_products(
    status: ProductStatuses | None = None, use_case=Depends(get_products_case)
) -> GetProductsReponse:
    request = GetProductsRequest(status=status)
    return use_case(request)
