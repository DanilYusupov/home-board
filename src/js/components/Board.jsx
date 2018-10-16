import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task.jsx'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import Form from './Form'

class Board extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.toggle = this.toggle.bind(this)
        this.state = {
            show: false
        }
    }

    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    renderTemplate = status => {
        const { tasks, editStatus, removeTask } = this.props
        const newArray = tasks.slice().filter(
            task => task.status === status,
        ).map(task =>
            <Task
                key={task.id}
                task={task}
                editStatus={editStatus}
                removeTask={removeTask}
            />,
        )
        return (
            <div>
                {newArray}
            </div>
        )
    }


    render() {
        const {addTask} = this.props
        return (
            <div className="row">
                <div className="col card mx-1" style={{ width: 33.3 + '%', minHeight: 70 + 'vh' }}>
                    <div className="text-center mt-1 mb-0" style={{ display: 'inline-block' }}>
                        <strong className="text-center lead">TODO</strong>
                        <button className="btn btn-sm btn-primary rounded-circle float-right"
                                style={{ width: 2.2 + 'em', height: 2.2 + 'em' }}
                                data-toggle="tooltip" data-placement="left" title="Add task"
                                onClick={this.toggle}
                        >+
                        </button>
                    </div>
                    <div className="dropdown-divider"></div>
                    {this.renderTemplate('TODO')}
                </div>
                <div className="col card mx-1" style={{ width: 33.3 + '%' }}>
                    <p className="text-center lead mt-1 mb-0">IN PROGRESS</p>
                    <div className="dropdown-divider"></div>
                    {this.renderTemplate('IN_PROGRESS')}
                </div>
                <div className="col card mx-1" style={{ width: 33.3 + '%' }}>
                    <p className="text-center lead mt-1 mb-0">DONE</p>
                    <div className="dropdown-divider"></div>
                    {this.renderTemplate('DONE')}
                </div>
                <div>
                    <Modal isOpen={this.state.show} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Task Creation</ModalHeader>
                        <ModalBody>
                            <Form addTask={addTask}/>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}

Board.propTypes = {
    tasks: PropTypes.array,
}

export default Board