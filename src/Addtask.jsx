import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Redux/Action";
import { useId } from "react";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const generateId = () => {
   return  (Math.random() * 10003005).toFixed();
    
  };

  const handleAddTask = () => {
    if (description.trim() !== "") {
      const Id = generateId();
      

      dispatch(addTask({ id: Id, description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
