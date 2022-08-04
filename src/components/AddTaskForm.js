import React from "react";

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="new-item">Add to the todo list</label>
      <input
        type="text"
        id="new-item"
        value={newTask}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;
