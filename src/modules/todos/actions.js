import * as types from './constants';

let nextTodoId = 0;

export const addTodo = (data) => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        payload: data
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

export const updateTodo = (data) => {
    return {
        type: types.UPDATE_TODO,
        payload: data
    }
}

export const toggleDone = (data) => {
    return {
        type: types.TOGGLE_DONE,
        payload: data
    }
}

export const resetFilter = () => {
     return {
        type: types.RESET_FILTER
    }
}

export const filterTodo = (filter) => {
    return {
        type: types.FILTER_TODOS,
        payload: filter
    }
}