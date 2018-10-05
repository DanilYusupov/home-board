import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'

class Board extends React.Component {

    renderTemplate = status => {
        const {
            tasks,
            removeTask,
            editStatus,
            editTitle,
            editText,
        } = this.props
        let newArray = tasks.slice()
        return (
            <div>
                {newArray.filter(task => task.status === status).map(task => {
                    <Task
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                        editStatus={editStatus}
                        editTitle={editTitle}
                        editText={editText}
                    />
                })}
            </div>
        )
    }


    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <h1>TODO</h1>
                    {this.renderTemplate(status.TODO)}
                </div>
                <div className="col-3">
                    <h1>IN PROGRESS</h1>
                    {this.renderTemplate(status.IN_PROGRESS)}
                </div>
                <div className="col-3">
                    <h1>DONE</h1>
                    {this.renderTemplate(status.DONE)}
                </div>
            </div>
        )
    }
}

Board.propTypes = {
    tasks: PropTypes.array,
}

export default Board