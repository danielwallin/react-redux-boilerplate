import React from "react"

export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { formdata: null }
    }

    _onChange(e) {
        const name = e.target.getAttribute("name"),
              val = e.target.value;

        console.log(val);
        this.setState({
            formdata: {
                [name]: val
            }
        })
    }

    _onSubmit(e) {
        this.props.onSubmit(this.state.formdata, e);
        this.setState({formdata: {
            todo: ''
        }});
    }

    render() {
        return <form {...this.props} onSubmit={this._onSubmit.bind(this)}>
            <input
                name="todo"
                onChange={(e)=>{ this._onChange(e) }}
                type="text"
                autoComplete="off"
                value={(this.state.formdata && this.state.formdata.todo) && this.state.formdata.todo}
                placeholder="Add a todo" />
        </form>
    }
}