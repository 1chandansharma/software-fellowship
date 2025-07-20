from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json
DATA_PATH = "todo.json"
app = FastAPI()
class Todo(BaseModel):
    id: int
    title: str
    completed: bool
def read_todos():
    with open(DATA_PATH, "r") as f:
        todos = json.load(f)
        return todos
def writ_todo(todo):
    with open (DATA_PATH, "w") as f:
        json.dump(todo,f,indent=2)

@app.post("/create-todo")
def create_todo(todo: Todo):
    todos = read_todos()
    for t in todos:
      if t["id"] == todo.id:
        raise HTTPException(status_code=400, detail="Todo with given id already exists")
    todo_dict = todo.dict()
    todos.append(todo_dictdo)
    writ_todo(todo_dict)
    return todo_dict
@app.get("/")
def read_todos_route():
    todos = read_todos()
    return JSONResponse(content=todos,status_code = 200)
@app.get("/get-todo/{todo_id}")
def get_todo_by_id(todo_id:int):
    return{
        "id":todo_id
    }
      

