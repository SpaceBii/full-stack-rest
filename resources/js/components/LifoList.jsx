import React, { Component } from 'react';
import LifoListRow from './LifoListRow';

class LifoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lifos: [],
        }
    }
    
    // Life cycle method.
    componentDidMount() {
        this.getLifoList();
    }

    // Get the list of all lifo obj.
    getLifoList = () => {
        let self = this;
        axios.get('/get/lifo/list').then(function (response)  {
            self.setState({
                lifos: response.data
            });
            console.log(response.data);
        });
}


    render() {
        return (
            <div>
                <table className="table table-hover lifo-list">
                    <thead>
                        <tr>
                            <th scope="col" width="100px">#</th>
                            <th scope="col" width="100px">Name</th>
                            <th scope="col" width="100px">Age</th>
                            <th scope="col" width="100px">Made on date:</th>
                            <th scope="col" width="100px">Value Key</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.state.lifos.map(function(x, i) {
                            return <LifoListRow />
                        })}  */}
                        <LifoListRow />
                    </tbody>
                </table> 
            </div>
        );
    }
}

export default LifoList;
