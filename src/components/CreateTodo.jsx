import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../reducers/reducer.js";
import Todos from "./Todos.jsx";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const handle = () => {
    dispatch(AddTodo(todo));
    return setTodo("");
  };
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div
        className="w-[550px] flex flex-col gap-4 justify-center items-center
      md:mt-20 mt-0  p-12 border-[1px] rounded-lg
      border-indigo-700 outline-offset-2 "
      >
        <h1 className=" md:text-6xl text-4xl  text-indigo-600 font-bold">
          Todo App
        </h1>

        <input
          className="p-2 w-full outline-0"
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="What's Next??"
        />
        <button
          className="border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white  px-6 py-2 duration-500 ease-in-out"
          onClick={handle}
        >
          Add ToDo
        </button>
        <Todos />
      </div>
    </div>
  );
};

export default CreateTodo;
