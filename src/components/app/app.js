import React, { Component } from 'react';
import ListItem from '../list_item/list_item';

export default class App extends Component {
  initialId = 1;

  constructor(props) {
    super(props)

    this.state = {
      todoItems: [],
      inputItem: ''
    }
  }

  onChange = (event) => {
    this.setState({
      inputItem: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputItem: '',
      todoItems: [...this.state.todoItems, {
        value: this.state.inputItem,
        id: this.initialId++
      }]
    })
    
  }

  deleteItem = (index) => {
    this.setState(({todoItems}) => {
      const newArray = [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1)
      ]
      return {
        todoItems: newArray
      }
    })  
  }
  
  render() { 
    const { todoItems } = this.state
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
          todoItems={todoItems} 
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}
