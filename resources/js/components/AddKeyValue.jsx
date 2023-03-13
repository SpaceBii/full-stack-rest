import React, { Component } from 'react';

class AddKeyValue extends Component {
    render() {
        return (
            <div>
                <button type="button" 
                className="btn btn-primary add-new" 
                data-toggle="modal" 
                data-target="#keyValueModal"
                >
                 Add a Key Value
                </button>
                <div className="modal fade" id="keyValueModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className='form-group'>
                            <input type="text"
                                className='form-control mb-3'
                                placeholder='Value Here ...'
                            />
                            <input type="text"
                                className='form-control mb-3'
                                placeholder='Value Key Here ...'
                            />
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            Add a TTL
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default AddKeyValue;
