import React from "react";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  return (
    <div data-testid='todo-list-wrapper'>

      {/* map all the "individual/single" todo inside this div. */}
      <div data-testid="single-todo" >

      </div>


    </div>
  );
};

export default TodoList;
