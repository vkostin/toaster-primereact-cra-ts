import React, {useRef} from 'react';
import {Toast} from "primereact/toast";

interface IProps {
    children?: React.ReactNode
}

export type ToastMessageSeverity = "success" | "info" | "warn" | "error"

export type TShowToast = (severity: ToastMessageSeverity, message: string, details?: string, life?: number) => void;

export interface IToasterContext {
    showToast: TShowToast,
}

export const ToasterContext = React.createContext({showToast: () => {}} as IToasterContext);

/**
 * Toaster
 *
 * v 1.0.0
 */
const Toaster = (props: IProps) => {
    const {children} = props;
    const ref = useRef(null);
    const showToast: TShowToast = (severity: string, message: string, details?: string, life?: number) =>
        // @ts-ignore
        ref.current.show({severity, summary: message, details, life});
    return (
        <>
            <Toast ref={ref}/>
            <ToasterContext.Provider value={{showToast}}>
                {children}
            </ToasterContext.Provider>
        </>
    );
};


export default Toaster;
