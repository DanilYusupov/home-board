import React from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'

class Form extends React.Component {

    submit = e => {
        const { _title, _text, _assignee } = this.refs
        e.preventDefault()
        this.props.addTask(
            _title.value,
            _text.value,
            _assignee.value,
        )
        this.props.toggle()
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.show} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>Task Creation</ModalHeader>
                    <ModalBody>
                        <div className="row p-3">
                            <form className="w-100" onSubmit={this.submit}>
                                <div className="form-group">
                                    <label htmlFor="title">Task's title</label>
                                    <input type="text" className="form-control" id="title"
                                           ref="_title" placeholder="Enter title" required/>
                                    <label htmlFor="text">Task's text</label>
                                    <input type="text" className="form-control" id="text"
                                           ref="_text" placeholder="Enter text" required/>
                                    <label htmlFor="assignee">Task's assignee</label>
                                    <input type="text" className="form-control" id="assignee"
                                           ref="_assignee" placeholder="Enter assignee" defaultValue="unassigned"/>
                                    <div className="mt-2 float-right">
                                        <Button outline color="success" size="sm" type="submit">Create</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Form;