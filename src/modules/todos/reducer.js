import * as types from './constants';

const INITIAL_STATE = {
    todos: [],
    todosfilter: [],
    error: false,
}

export default function reducer(state=INITIAL_STATE, action) {

    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {...action.payload, id: action.id, active: true}],
                todosfilter: [...state.todos, {...action.payload, id: action.id, active: true}]
            }
        case types.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter( item => item.id !== action.payload ),
                todosfilter: state.todos.filter( item => item.id !== action.payload )
            }
        case types.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.filter( item => item.id !== action.payload ),
                todosfilter: state.todos
            }
        case types.FILTER_TODOS:
            return {
                ...state,
                todosfilter: state.todos.filter( item => item[action.payload] )
            }
        case types.RESET_FILTER:
            return {
                ...state,
                todosfilter: state.todos
            }
        case types.TOGGLE_DONE:
            const newTodos = [...state.todos],
                  todoUpdate = state.todos.findIndex(todo => todo.id === action.payload.id),
                  isDone =! state.todos[todoUpdate].done,
                  active =! state.todos[todoUpdate].active;

            newTodos[todoUpdate] = {...action.payload, done: isDone, active: active};

            return {
                ...state,
                todos: newTodos,
                todosfilter: newTodos
            }
        default:
            return state;
    }

}