import pytest
from fastapi.testclient import TestClient

from api.main import api


@pytest.fixture
def api_client() -> TestClient:
    client = TestClient(api)

    return client
