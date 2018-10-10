import React from 'react'

class Task extends React.Component {

    renderButton(task, button) {
        const { editStatus } = this.props
        if (task.status !== button.status) {
            return (
                    <button type="button" className={button.style}
                            onClick={() => editStatus(task.id, button.status)}>{button.status}</button>
            )
        }
    }

    render() {
        const {
            task,
            removeTask,
        } = this.props
        return (
            <div className="card mt-1">
                <div className="m-1">
                    <button type="button" className="close" onClick={() => removeTask(task.id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">{task.title}</h5>
                    <div className="d-flex flex-row bd-highlight">
                        {this.renderButton(task, { status: 'TODO', style: 'mx-1 btn btn-sm btn-outline-dark' })}
                        {this.renderButton(task, {
                            status: 'IN_PROGRESS',
                            style: 'mx-1 btn btn-sm btn-outline-warning',
                        })}
                        {this.renderButton(task, { status: 'DONE', style: 'mx-1 btn btn-sm btn-outline-success' })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Task