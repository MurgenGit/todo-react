import React, { Component } from 'react';
import ListItem from '../list_item/list_item';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todoItem: [],
      inputItem: '',
      id: ''
    }
  }
  initialId = 1;

  onChange = (event) => {
    this.setState({
      inputItem: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputItem: '',
      todoItem: [...this.state.todoItem, this.state.inputItem],
      id: this.initialId++
    })
    console.log(this.state.id)
  }

  deleteItem = (id) => {
    this.setState(({todoItem}) => {
      const deleteId = todoItem.findIndex((el) => el.id === id)
      const newArray = [
        ...todoItem.slice(0, deleteId),
        ...todoItem.slice(deleteId + 1)
      ]
      return {
        todoItem: newArray
      }
    })
  }
  
  render() { 
    const { todoItem } = this.state
    return (
      <div>
        <h2>React Todo App</h2>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.inputItem}
            placeholder="Add todo"
            type="text"
            className="input"
            onChange={this.onChange}
          />
          <button type="submit" className="btn">Add</button>
        </form>
        <ListItem 
          todoItem={todoItem} 
          deleteItem={this.deleteItem}
        />        
      </div>
    )
  }
}
