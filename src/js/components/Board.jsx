import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'

class Board extends React.Component {

    renderTemplate = status => {
        const {tasks, editStatus} = this.props
        const newArray = tasks.slice().filter(
            task => task.status === status
        ).map(task =>
            <Task
                key={task.id}
                task={task}
                editStatus={editStatus}
            />
        )
        return (
            <div>
                {newArray}
            </div>
        )
    }


    render() {
        return (
            <div className="row">
                <div className="col">
                    <h1>TODO</h1>
                    {this.renderTemplate('TODO')}
                </div>
                <div className="col">
                    <h1>IN PROGRESS</h1>
                    {this.renderTemplate('IN_PROGRESS')}
                </div>
                <div className="col">
                    <h1>DONE</h1>
                    {this.renderTemplate('DONE')}
                </div>
            </div>
        )
    }
}

Board.propTypes = {
    tasks: PropTypes.array,
}

export default Board