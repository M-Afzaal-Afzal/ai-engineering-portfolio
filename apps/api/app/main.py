from fastapi import FastAPI

app = FastAPI(
    title="AI Engineering Portfolio API",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "api",
        "version": "0.1.0",
    }