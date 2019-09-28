import React, { Component } from 'react';
import List from '../list/list';
import './app.css';

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
        id: this.initialId++,
        completed: false
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
    console.log(this.state.todoItems)
  }
  
  onCompletedHandler = (id) => {
    console.log(id)
    this.setState(({todoItems}) => {
      return {todoItems: todoItems.map(ti => ti.id === id ? ({...ti, completed: !ti.completed}) : ti)};
    })
  }
  
  render() { 
    const { todoItems } = this.state
    return (
      <div className="jumbotron todo-app">
        <h2>React Todo App</h2>
        <form onSubmit={this.onSubmit} className="form">
          <input
            value={this.state.inputItem}
            placeholder="Add todo"
            type="text"
            className="form-control form-control-lg"
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-secondary">Add</button>
        </form>
        <List
          todoItems={todoItems} 
          deleteItem={this.deleteItem}
          onCompletedHandler={this.onCompletedHandler}
        />
      </div>
    )
  }
}
