import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board.jsx'
import Form from '../components/Form.jsx'
import {addTask} from '../actions/TasksActions'

class App extends Component {



    render() {
        const {
            tasks,
            addTask
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)