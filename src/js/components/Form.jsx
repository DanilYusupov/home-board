import React from 'react'

class Form extends React.Component {
    submit = e => {
        const {_title, _text, _assignee} = this.refs
        e.preventDefault()
        this.props.addTask(
            _title.value,
            _text.value,
            _assignee.value
        )
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="title">Task's title</label>
                        <input type="text" className="form-control" id="title"
                               ref="_title" placeholder="Enter title" required/>
                        <label htmlFor="text">Task's text</label>
                        <input type="text" className="form-control" id="text"
                               ref="_text" placeholder="Enter text" required/>
                        <label htmlFor="assignee">Task's assignee</label>
                        <input type="text" className="form-control" id="assignee"
                               ref="_assignee" placeholder="Enter assignee" defaultValue="unassigned"/>
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;