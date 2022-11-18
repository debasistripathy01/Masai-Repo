import React from "react";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  return (
    <div>
      <input
        data-testid="todo-input"
      />
      <button data-testid="todo-add-btn" >
      </button>
    </div>
  );
};

export default TodoInput;
