import React,{useEffect, useState} from 'react';
import {useNotificationContext } from './notification.context';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import './Notification.css';

export default function Notification({id,type,message}) {
    const dispatchNotifications = useNotificationContext();

    const [width, setWidth] = useState(100);
    const [intervalId, setIntervalId] = useState(null);
    const [exit, setExit] = useState(false);

    const handleStartInterval = () => {
        const id =  setInterval(()=> {
            setWidth( (prev) =>{
                if (prev > 0) return prev-1;
                clearInterval(id);
                return prev;
            } );
        }, 20);
        setIntervalId(id);
    }

    const handlePauseInterval = () => {
        clearInterval(intervalId);
    }

    const handleCloseNotification = () => {
        handlePauseInterval();
        setExit(true);
        setTimeout( ()=> {
            // remove the notification from state and hence from dom 
            dispatchNotifications({
                type: "REMOVE_NOTIFICATION",
                id: id
            });
        }, 400);
    }

    useEffect( () => {
        if (width === 0) handleCloseNotification() ;
    }, [width]);

    useEffect( () => {
        handleStartInterval();
    }, []);


    return (
        <div className={`Notification ${type} ${exit ? "exit" : ""}`}
            onMouseEnter={handlePauseInterval} onMouseLeave={handleStartInterval}
            // style={{opacity:`${width}%`}}
            >
            <CloseRoundedIcon 
                onClick={handleCloseNotification}
                className="Notification-Close-Btn"/>
            <p> {message} </p>
            <div 
                className={`Notification-Timebar ${type}`}
                style={{width:`${width}%`}}/>
        </div>
    )    
}