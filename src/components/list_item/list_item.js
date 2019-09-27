import React from 'react';

const ListItem = (props) => {
  return (
    <ul>
      {props.todoItem.map((todoItem, id) =>
        <li key={id}>
          {todoItem}
          <button onClick={props.deleteItem(id)}>x</button>
        </li> 
        
      )}
    </ul>
  )
}

export default ListItem;