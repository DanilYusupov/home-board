import React from 'react'

class Task extends React.Component {
    render() {
        const { task} = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{task.title}</h5>
                        <button type="button" className="close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{task.assignee}</h6>
                    <p className="card-text">{task.text}</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-secondary"
                        >TODO
                        </button>
                        <button type="button" className="btn btn-secondary"
                        >IN PROGRESS
                        </button>
                        <button type="button" className="btn btn-secondary"
                        >DONE
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task