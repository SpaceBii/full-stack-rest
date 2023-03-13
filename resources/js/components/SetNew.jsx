import React, { Component } from 'react'

export default class SetNew extends Component {

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //         MyNewName: null,
    //     }
    //   }


    //   putNewName = (event) => {
    //     this.setState({
    //         MyNewName: event.target.value,
    //     });
    // }

    // storeMyName = () => {
    //     axios.post('/add/new/name', {
    //         MyNewName: this.state.MyNewName,
    //     }).then( () => {

    //         setTimeout( () => {
    //             location.reload();
    //         },2500)
    //     })
    // }


  render() {
    return (
      <div>
            <button type="button" 
                className="btn btn-primary add-new" 
                data-toggle="modal" 
                data-target="#setNewModal"
                >
            Set New
            </button>

            <div className="modal fade" id="setNewModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Seting New Name</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <div className='form-group'>
                        <input type="text"
                            id='employeeName'
                            className='form-control mb-3'
                            placeholder='Set new Name here ...'
                            onChange= {this.putNewName}
                        />
                    </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick= {this.storeMyName} >Save</button>
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
