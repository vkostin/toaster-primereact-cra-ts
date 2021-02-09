import React, {useContext} from 'react';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {ToasterContext} from '../Toaster/Toaster';

/**
 * InnerComponent
 *
 * v 1.0.0
 */
const InnerComponent = () => {
    const {showToast} = useContext(ToasterContext)

    return (
        <Card style={{maxWidth: 500, margin: 'auto'}} header={<p>Some inner component</p>}>
            <Button label={"Warning"} className="p-button-warning" onClick={() => {
                showToast("warn", "Warning!")
            }}/>
            <br/>
            <br/>
            <Button label={"Error"} className="p-button-error" onClick={() => {
                showToast("warn", "Warning!")
            }}/>
            <br/>
            <br/>
            <Button label={"Success"} className="p-button-success" onClick={() => {
                showToast("warn", "Warning!")
            }}/>
        </Card>
    );
};


export default InnerComponent;
