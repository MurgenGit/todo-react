import React from 'react';

const ListItem = (props) => {
  return (
    <ul>
      {props.todoItems.map((todoItem, index) =>
        <li key={index}>
          {todoItem.value}
          <button onClick={() => props.deleteItem(index)}>x</button>
        </li>   
      )}
    </ul>
  )
}

export default ListItem;