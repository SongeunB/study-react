import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>test</span>
      <button>Delete</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">Add</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
