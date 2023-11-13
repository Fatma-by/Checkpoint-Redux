export const addTask = (task) => ({
    type: 'ADD_TASK',
    task,
  });
  
  export const editTask = (id, description) => ({
    type: 'EDIT_TASK',
    id,
    description,
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    id,
  });