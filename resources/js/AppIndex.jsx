import React  from 'react';
import ReactDOM from 'react-dom/client';
import AddKeyValue from './components/AddKeyValue';
import AddNew from './components/AddNew'
import LastObj from './components/LastObj';
import LifoList from './components/LifoList';
import SetNew from './components/SetNew';
import './index.css'

function AppIndex() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='main-app'>
                    <strong className='phase'>This is phase one</strong>
                        <AddNew />
                        <LastObj />
                    <strong className='phase'>This is phase two</strong>
                        <div className='phase-2-btns'>
                            <SetNew />
                            <button
                                className="btn btn-secondary get-lifo add-new"
                            >
                            Get From Lifo
                            </button>
                            <AddKeyValue />
                        </div>
                        <div className='phase-1'>
                            This renders the Get Lifo BTN
                            <h1 className='stack-name'>Sorry dont work yet</h1>
                        </div>
                            <LifoList />
                </div>
            </div>
        </div>
    );
}

export default AppIndex;