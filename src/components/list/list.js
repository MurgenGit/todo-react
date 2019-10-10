import React from 'react';
import './list.css';

const List = (props) => {
  return (
    <ul className="ul">
      {props.todoItems.map((todoItem, index) =>
        <li key={index} className={`list-item ${todoItem.completed ? 'completed' : ''}`}>
          {todoItem.value}
          <div className="list-btn-container">
            <button 
              onClick={() => props.deleteItem(index)}
              className="btn btn-outline-danger btn-sm btn-fix"
            >
              <i className="far fa-trash-alt" title="Delete"/>
            </button>
            <button 
              onClick={() => props.onCompletedHandler(todoItem.id)}
              className="btn btn-outline-success btn-sm btn-fix"
            >
              {
                todoItem.completed
                ? <i className="fas fa-minus-circle" title="Cancel"/>
                : <i className="fas fa-check" title="Done"/>
              }
            </button>
          </div>
          
        </li>   
      )}
    </ul>
  )
}

export default List;