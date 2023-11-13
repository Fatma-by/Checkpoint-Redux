import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFiltred] = useState([]);

  useEffect(() => {
    setFiltred(tasks);
  }, [tasks]);

  return (
    <>
      <button
        onClick={() => {
          setFiltred(tasks.filter((task) => task.isDone === true));
        }}
      >
        done
      </button>
      <button
        onClick={() => {
          setFiltred(tasks.filter((task) => task.isDone === false));
        }}
      >
        not yet
      </button>
      <button
        onClick={() => {
          setFiltred(tasks);
        }}
      >
        reset
      </button>

      <div>
        <h2>Task List</h2>
        {filter.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
    </>
  );
};

export default ListTask;
