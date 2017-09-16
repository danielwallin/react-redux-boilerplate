import React from "react"

export const TodoItem = (props) => (
    <li className={(props.todo.done) ? props.className + " completed" : props.className}>
        <div className="todos__itemInner">
            <div className="checkbox">
                <input onClick={()=>{props.onToggle()}} type="checkbox" checked={props.todo.done} />
                <div className="control__indicator"></div>
            </div>
            <span>{ props.todo.todo }</span>
            <button className="todos__itemDelete" onClick={()=>{props.onDelete()}}>
                <span className="ion-close-circled"></span>
            </button>
        </div>
    </li>
)