import React from 'react';

export const ToDo = ({ todo, hadleCheckCompleted, handleDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.completed}
            onChange={() => hadleCheckCompleted(todo.id)}
          />
          {todo.title}
        </div>
        <div className="col">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(todo.id)}
          >
            Close
          </button>
        </div>
      </div>
    </li>
  );
};
