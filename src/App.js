import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { Component } from 'react'
import AddTodo from './MyComponents/AddTodo';

export class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: [
        
      ],
      onDelete: (todo) => {
        console.log('i am delete method', todo);
        this.setState({
          todos: this.state.todos.filter((e) => {
            return e !== todo;
          })
        })

      }

    }
  }

  addTodo = (title, desc) => {
    console.log('i am adding this function', title, desc);
    let sno;
    if (this.state.todos.length == 0)
      sno = 1;
    else
      sno = this.state.todos[this.state.todos.length - 1].sno + 1;

    const myTodo =
    {
      sno: sno,
      title: title,
      desc: desc
    }
    this.setState({ todos: [...this.state.todos, myTodo] });
    console.log(myTodo);


  }


  render() {

    return (
      <>
        <Header title='MY TODO LIST' searchBar={false} />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} onDelete={this.state.onDelete} />
        <Footer />
      </>
    )
  }
}

export default App;
