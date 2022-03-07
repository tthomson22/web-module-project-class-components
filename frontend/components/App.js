import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleToggle = (clickedId) => {
    // const clickedId = 1528817077286
    
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
    
  }

  render() {
    const { todos } = this.state;
    // console.log(this.state)

    return (
      <div>
        <h2>Todo App</h2>

        <TodoList handleToggle={this.handleToggle} todos={todos}/>

        <Form handleAdd={this.handleAdd}/>

        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
