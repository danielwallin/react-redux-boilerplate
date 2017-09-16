import React from "react"
import { connect } from "react-redux"
import * as actions from "./actions"

import { AddTodo } from "./components/AddTodo"
import { TodoItem } from "./components/TodoItem"

class TodosView extends React.Component {

    constructor(props) {
        super(props);
        this.filter = [
            {
                name: "All",
                cb: ()=>{ props.resetFilter() },
                active: true
            },
            {
                name: "Active",
                cb: ()=>{ props.filterTodo("active") },
                active: false
            },
            {
                name: "Completed",
                cb: ()=>{ props.filterTodo("done") },
                active: false
            }
        ];
    }

    filterItem() {
        let count = this.props.todos.todos.length;
        return this.filter.map( (item, i) => (
            <li key={item.name} className={ (item.active) ? "active" : "" }>
                <a onClick={()=>{
                    this.filter.forEach(item=>{ item.active = false });
                    this.filter[i].active=true;
                    item.cb();
                }}>{ (item.name.toLocaleLowerCase()=='all') ? item.name : item.name }</a>
            </li>
        ));
    }

    render() {
        const { todos,
                addTodo,
                deleteTodo,
                filterTodo,
                toggleDone,
                resetFilter } = this.props;

        let count = 0;

        todos.todos.forEach( item => {
            if(!item.done)
                count++;
        });

        return(
            <section className="todos container">
                <h2 style={{ textAlign: "center" }}>Todos</h2>
                <div className="todos__inner">
                    <AddTodo
                        className="todos__add"
                        onSubmit={(val, e)=>{
                            e.preventDefault();
                            addTodo(val);
                    }} />
                    <ul className="todos__list">
                        <li>
                            {todos.todosfilter.length != 0 &&  todos.todosfilter.filter( (todo) => { return (!todo.done) }).length != 0 &&
                                <h3 className="heading">Active</h3>
                            }
                        </li>
                        {   todos.todosfilter.filter( (todo) => { return (!todo.done) }).map( (todo) => {
                                return <TodoItem
                                        key={todo.id}
                                        className="todos__item animated tdFadeInDown"
                                        todo={todo}
                                        onToggle={()=>{toggleDone(todo)}}
                                        onDelete={()=>{deleteTodo(todo.id)}}
                                        />
                            })
                        }
                    </ul>

                    <ul className="todos__list">
                        <li>
                            { todos.todosfilter.filter( (todo) => { return (todo.done) }).length != 0 &&
                                <h3 className="heading">Completed</h3>
                            }
                        </li>
                        {   todos.todosfilter.filter( (todo) => { return (todo.done) }).map((todo) => {
                                return <TodoItem
                                        key={todo.id}
                                        className="todos__item animated tdFadeInDown"
                                        todo={todo}
                                        onToggle={()=>{toggleDone(todo)}}
                                        onDelete={()=>{deleteTodo(todo.id)}}
                                        />
                            })
                        }
                    </ul>

                    {todos.todosfilter.length == 0 && todos.todos.length != 0 &&
                        <h3 style={{ textAlign: "center" }} className="todos__noresults">No todos</h3> }

                    {todos.todos.length > 0 &&
                        <div>
                            <div className="todos__filter">
                                <span>{ count } tasks remain</span>
                                <ul>{ this.filterItem() }</ul>
                            </div>
                        </div>
                    }

                </div>
            </section>
        )
    }
}

export default connect(
  state => ({
    todos: state.TodosReducer
  }),
  actions
)(TodosView);