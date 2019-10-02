import React from 'react';

const DeleteCompletedItems = (props) => {

  return (
    <div>
      <button 
        className="btn btn-outline-danger"
        onClick={() => props.onDeleteCompletedItems()}

      >Delete Completed Items</button>
    </div>
  )
}

export default DeleteCompletedItems;