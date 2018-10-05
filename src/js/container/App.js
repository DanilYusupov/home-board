import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board.jsx'
import Form from '../components/Form.jsx'
import {
    addTask,
    removeTask
} from '../actions/TasksActions'
import {
    editStatus,
    editTitle,
    editText
} from '../actions/TaskActions';

class App extends Component {



    render() {
        const {
            tasks,
            addTask,
            removeTask,
            editStatus,
            editTitle,
            editText,
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
                        removeTask={removeTask}
                        editStatus={editStatus}
                        editTitle={editTitle}
                        editText={editText}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        tasks: store.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (title, text, assignee) => dispatch(addTask(title, text, assignee)),
        removeTask: id => dispatch(removeTask(id)),
        editStatus: (id, status) => dispatch(editStatus(id, status)),
        editTitle: (id, title) => dispatch(editTitle(id, title)),
        editText: (id, text) => dispatch(editText(id, text)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)