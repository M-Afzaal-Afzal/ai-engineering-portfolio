from fastapi import APIRouter

from app.core.settings import get_settings

router = APIRouter(
    tags=["health"],
)


@router.get("/health")
def health_check() -> dict[str, str]:
    settings = get_settings()

    return {
        "status": "ok",
        "service": "api",
        "version": settings.app_version,
        "environment": settings.app_env,
    }
