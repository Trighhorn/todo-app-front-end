import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import TodoItem from './todo-item'
import './main.scss';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: "",
      todos: []
    }
  }

  renderTodos = () => {
    return this.state.todos.map(item => {
      return <TodoItem key={item.id} item={item} />
    }
      )
  }


  componentDidMount() {
    fetch("https://ag-flask-todo-api.herokuapp.com/todos")
    .then(response => response.json())
    .then(data => {
      this.setState({
        todos: data
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      todos: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method:"POST",
      url: "https://ag-flask-todo-api.herokuapp.com/todo",
      headers: {"content-type": "application/json"},
      data: {
        title: this.state.todo,
        done: false
      }
    }).then(data => {
      this.setState({
        todos: [...this.state.todos, data.data],
        todo: ""
      })
    }).catch((error) => {
      console.log("add todo error: ", error)
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Task"
            value={this.state.todo}
            onChange={this.handleChange}
            name="todo"
            className="text-field"
          />
          <button 
            type="submit"
          >Add Task</button>
        </form>
        {this.renderTodos()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

