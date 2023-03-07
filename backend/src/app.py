from fastapi import FastAPI, Body
import uvicorn

app = FastAPI()

@app.get('/')
def index():
    return {'res': 'backend running'}

if __name__ == "__main__":
    uvicorn.run(app,host='0.0.0.0', port=3001)