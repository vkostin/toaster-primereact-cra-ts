import React from 'react';
import './App.css';
import InnerComponent from './components/InnerComponent/InnerComponent';
import Toaster from "./components/Toaster/Toaster";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
    return (
        <Toaster>
            <div className="App">
                <InnerComponent/>
            </div>
        </Toaster>
    );
}

export default App;
