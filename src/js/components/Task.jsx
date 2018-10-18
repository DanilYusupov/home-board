import React from 'react'
import TaskInfo from './TaskInfo.jsx'

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            show: false
        }
    }

    renderButton(task, button) {
        const { editStatus } = this.props
        if (task.status !== button.status) {
            return (
                    <button type="button" className={button.style}
                            onClick={() => editStatus(task.id, button.status)}>{button.status}</button>
            )
        }
    }

    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const {
            task,
            removeTask,
        } = this.props
        return (
            <div className="card mt-1" onClick={this.toggle}>
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
                <TaskInfo task={task} toggle={this.toggle} show={this.state.show}/>
            </div>
        )
    }
}

export default Task