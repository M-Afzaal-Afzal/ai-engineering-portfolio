from fastapi import FastAPI

from app.routers.health import router as health_router
from app.routers.tickets import router as tickets_router

app = FastAPI(
    title="AI Engineering Portfolio API",
    version="0.1.0",
)

app.include_router(health_router)
app.include_router(tickets_router)