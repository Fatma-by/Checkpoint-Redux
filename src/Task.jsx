import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "./Redux/Action";

const Task = ({ task }) => {
  const { id, description, isDone } = task;
  console.log(id, "id");
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(id));
  };

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    console.log(task);
    if (editedDescription.trim() !== "") {
      console.log(id, editedDescription);
      dispatch(editTask(id, editedDescription));
      setIsEditing(false);
    }
  };

  return (
    <>
      <div>
        <input type="checkbox" checked={isDone} onChange={handleToggleTask} />
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />

            <button onClick={handleSaveEdit}>Save</button>
          </>
        ) : (
          <>
            <span>{description}</span>
            <button onClick={handleEditTask}>Edit</button>
          </>
        )}
      </div>
    </>
  );
};

export default Task;
