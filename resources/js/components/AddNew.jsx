import React, { Component } from 'react'
import axios from 'axios';

export default class AddNew extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            strName: null,
        }
      }


    inputStrName = (event) => {
        this.setState({
            strName: event.target.value,
        });
    }

    storeStrData = () => {
        axios.post('/push/new', {
            strName: this.state.strName,
        }).then( () => {

            setTimeout( () => {
                location.reload();
            },2500)
        })
    }


  render() {
    return (
      <div>
        <button type="button" 
            className="btn btn-primary add-new" 
            data-toggle="modal" 
            data-target="#exampleModal"
            >
        Add New
        </button>
        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Obj</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
                </button>
            </div>
            <div className="modal-body">
            <div className='form-group'>
                        <input type="text"
                            className='form-control mb-3'
                            placeholder='Random String'
                            onChange= {this.inputStrName}
                        />
                    </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick= {this.storeStrData} >Save</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
  }
}

