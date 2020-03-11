import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Added!")
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Add Task"
            value={this.state.todo}
            onChange={this.handleChange}
            name="todo"
          />
          <button 
            type="submit"
          >Add to List</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

