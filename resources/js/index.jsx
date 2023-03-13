import React from 'react';
import ReactDOM from 'react-dom/client';
import AppIndex from './AppIndex';


if (document.getElementById('App')) {
    const Index = ReactDOM.createRoot(document.getElementById("App"));

    Index.render(
        <React.StrictMode>
            <AppIndex/>
        </React.StrictMode>
    )
}
