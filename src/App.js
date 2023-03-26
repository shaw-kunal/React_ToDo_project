import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React from 'react'
import AddTodo from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export class App extends React.Component {

  initTodo;
  constructor(props) {
    super(props)

    if (localStorage.getItem("todos") === null) {
      this.initTodo = [];
      console.log("inti todo");
    }
    else {
      this.initTodo = JSON.parse(localStorage.getItem("todos"));
      console.log(this.initTodo);
      console.log("else todo");
    }
    this.state = {
      todos: this.initTodo,
      onDelete: (todo) => {
        console.log('i am delete method', todo);

        this.setState({
          todos: this.state.todos.filter((e) => {
            return e !== todo;
          })
        })
        localStorage.setItem("todos", JSON.stringify(this.state.todos));


      }

    }
  }





  addTodo = (title, desc) => {
    console.log('i am adding this function', title, desc);
    let sno;
    if (this.state.todos.length === 0)
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
    console.log('kunal');

  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));

  }




  render() {


    return (
      <Router>
        <Header title='MY TODO LIST' searchBar={false} />
        <Routes>
        <Route exact path="/home" element={
          <><AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} onDelete={this.state.onDelete} />
           </>
        }>
          </Route>
          <Route exact path="/about" element={  <About />}>
          </Route>
          
        </Routes>
        <Footer />
      </Router>
    )
  }
}
/*  */

export default App;
