import React from 'react'

class Task extends React.Component {
    render() {
        const { task, editStatus, removeTask } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{task.title}</h5>
                        <button type="button" className="close"
                                onClick={removeTask(task.id)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{task.assignee}</h6>
                    <p className="card-text">{task.text}</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-secondary"
                                onClick={editStatus(task.id, status.TODO)}
                        >TODO
                        </button>
                        <button type="button" className="btn btn-secondary"
                                onClick={editStatus(task.id, status.IN_PROGRESS)}
                        >IN PROGRESS
                        </button>
                        <button type="button" className="btn btn-secondary"
                                onClick={editStatus(task.id, status.DONE)}
                        >DONE
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task