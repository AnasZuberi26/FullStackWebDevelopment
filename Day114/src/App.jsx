import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");

    saveToLS();
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);

    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);

    saveToLS();
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);

    saveToLS();
  };

  const toggleFinished = (params) => {
    setShowFinished(!showFinished);
  };

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <Navbar />
      <div className="md:container bg-violet-100 mx-3 md:mx-auto my-5 p-5 rounded-xl min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-2xl md:text-4xl">
          ITask - Manage your Todos at one place
        </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className=" text-xl md:text-2xl font-bold">Add a Todo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-full rounded-full px-5 py-1"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="bg-violet-800  disabled:bg-violet-400 hover:bg-violet-900 text-white text-sm font-bold rounded-full p-4 py-2 mx-2"
            >
              Save
            </button>
          </div>
        </div>
        <input
          type="checkbox"
          onChange={toggleFinished}
          checked={showFinished}
          className="my-4"
        />{" "}
        <span className="text-lg font-bold mx-6">Show Finished</span>
        <div className="h-1 bg-black opacity-15 w-[90%] mx-auto my-5"></div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex justify-between my-3">
                  <div className="flex gap-5">
                    <input
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      name={item.id}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-bold rounded-md mx-1 p-2 py-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-bold rounded-md mx-1 p-2 py-1"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
