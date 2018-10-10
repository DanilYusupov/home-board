import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board.jsx'
import Form from '../components/Form.jsx'
import { addTask, editStatus } from '../actions/TasksActions'

class App extends Component {

    render() {
        const {
            tasks,
            addTask,
            editStatus
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)