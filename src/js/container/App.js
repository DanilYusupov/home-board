import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board.jsx'
import Form from '../components/Form.jsx'
import { addTask, editStatus, removeTask } from '../actions/TasksActions'

class App extends Component {

    render() {
        const {
            tasks,
            addTask,
            editStatus,
            removeTask
        } = this.props
        return (
            <div>
                <h1>Agile Family Board</h1>
                <div className="container-fluid">
                    <Form
                        addTask={addTask}
                    />
                    <Board
                        tasks={tasks}
                        editStatus={editStatus}
                        removeTask={removeTask}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        tasks: store,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (title, text, assignee) => dispatch(addTask(title, text, assignee)),
        editStatus: (id, status) => dispatch(editStatus(id, status)),
        removeTask: (id) => dispatch(removeTask(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)