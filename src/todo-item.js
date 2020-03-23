import React from 'react'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="todo-item">
        <input type="checkbox" />
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}