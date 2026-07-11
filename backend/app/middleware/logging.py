import time

from fastapi import Request

from app.core.logging import app_logger


async def log_requests(request: Request, call_next):
    start_time = time.time()

    response = await call_next(request)

    duration = round((time.time() - start_time) * 1000, 2)

    app_logger.info(
        f"{request.method} {request.url.path} | "
        f"Status: {response.status_code} | "
        f"{duration} ms"
    )

    return response