import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

class LastObj extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastStack: {},
            randStr:null,

        }
    }

        // Life cycle method.
        componentDidMount() {
            this.getLastObj();
        }
    
        // Get last object from the array.
        getLastObj = () => {
            let self = this;
            axios.get('/get/last').then(function (response)  {
                self.setState({
                    lastStack: response.data,
                    randStr: response.data.random_str,
                });
                 console.log(response.data);
            });
    }
    render() {
        return (
            <div className='phase-1'>
                This is the last stack of the DB.
          <h1 className='stack-name'>{this.state.randStr}</h1>
            </div>
        );
    }
}

export default LastObj;
