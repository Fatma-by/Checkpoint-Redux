import {addTask, editTask, toggleTask} from './Action'


const initialState = {
    tasks: [],
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        // Handle adding a new task
        return {
          ...state,
          tasks: [...state.tasks, action.task],
        };
      case 'EDIT_TASK':
        // Handle editing a task


        console.log
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.id ? { ...task, description: action.description } : task
          ),
        };
      case 'TOGGLE_TASK':
        // Handle toggling the 'isDone' status of a task
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.id ? { ...task, isDone: !task.isDone } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;