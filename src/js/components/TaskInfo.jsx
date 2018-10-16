import React from 'react'
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap'

class TaskInfo extends React.Component {

    status(status) {
        switch (status) {
            case 'TODO':
                return <span className="badge badge-dark">TODO</span>
            case 'IN_PROGRESS':
                return <span className="badge badge-warning">IN PROGRESS</span>
            case 'DONE':
                return <span className="badge badge-success">DONE</span>
            default:
                return <span className="badge badge-danger">Invalid status</span>
        }
    }

    render() {
        const { show, toggle, task } = this.props
        return (
            <div>
                <Modal isOpen={show} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        {task.title}
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            Assignee: <b>{task.assignee}</b>
                        </div>
                        <div>
                            Status: {this.status(task.status)}
                        </div>
                        <div>
                            <p>Description: {task.text}</p>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default TaskInfo