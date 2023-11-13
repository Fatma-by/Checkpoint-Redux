import { useState } from "react";

import "./App.css";
import AddTask from "./Addtask";
import ListTask from "./ListTask";

function App() {
  return (
    <>
      <AddTask />
      <ListTask />
    </>
  );
}

export default App;
