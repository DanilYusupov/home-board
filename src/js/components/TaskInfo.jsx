import React from 'react'
import {Modal, ModalBody, ModalHeader, Button} from 'reactstrap'

class TaskInfo extends React.Component {

    render() {
        const {show, toggle, task} = this.props
        return (
            <div>
                <Modal isOpen={show} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        {task.title}
                    </ModalHeader>
                    <ModalBody>
                        {task.text}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default TaskInfo