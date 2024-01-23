import React, { useState } from "react";
import ResultModal from "../common/ResultModal";
import { postAdd } from "../../api/todoApi";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;

    setTodo({ ...todo });
  };

  const handleClickAdd = () => {
    postAdd(todo).then((data) => {
      setResult(data.TNO);
      setTodo({ ...initState });
    });
  };

  const closeModal = () => {
    setResult(null);
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={() => handleClickAdd()}
        >
          Add
        </button>
      </div>

      {result ? (
        <ResultModal
          title={"Add Result"}
          content={`NEW ${result} Added`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default AddComponent;
