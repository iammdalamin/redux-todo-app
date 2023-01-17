import React from "react";
import { useSelector } from "react-redux";
import { DeleteTodoAlert } from "./DeleteTodoAlert";
import { EditTodoAlert } from "./EditTodoAlert";

const Todos = () => {
  const todoItems = useSelector((state) => state.value);

  return (
    <>
      {todoItems.map((todo, i) => {
        return (
          <div className="w-full p-4 shadow-xl" key={i}>
            <h1 className="mb-5 text-2xl">{`${i + 1}. ${todo}`}</h1>
            <div className="flex gap-4">
              <button
                className="bg-red-700 text-white  hover:bg-indigo-600 hover:text-white  px-6 py-2 duration-500 ease-in-out"
                onClick={() => DeleteTodoAlert(i)}
              >
                Delete
              </button>
              <button
                className="  bg-green-700 text-white outline-0	 hover:bg-indigo-600 hover:text-white  px-6 py-2 duration-500 ease-in-out"
                onClick={() => EditTodoAlert(i, todo)}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
