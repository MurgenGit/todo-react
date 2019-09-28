import React from 'react';
import './list.css';

const List = (props) => {
  return (
    <ul className="ul">
      {props.todoItems.map((todoItem, index) =>
        <li key={index} className={`list-item ${todoItem.completed ? 'completed' : ''}`}>
          {todoItem.value}
          <button 
            onClick={() => props.deleteItem(index)}
            className="btn btn-danger btn-sm btn-fix"
          >x</button>
          <button 
            onClick={() => props.onCompletedHandler(todoItem.id)}
            className="btn btn-success btn-sm btn-fix"
          >!</button>
        </li>   
      )}
    </ul>
  )
}

export default List;