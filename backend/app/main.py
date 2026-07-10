from fastapi import FastAPI

app = FastAPI(title="AI First CRM API")


@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}