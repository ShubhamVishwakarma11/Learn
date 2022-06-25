import React, {createContext,useContext, useReducer} from "react";
import {v4 as uuid} from "uuid";
import Notification from "./Notification";
import './Notification.css';
import notificationReducer from "./notification.reducer";

const NotificationContext = createContext();

export function NotificationContextProvider({children}) {
    const initialNotifications = [
        {
            id: uuid(),
            type: "success",
            message: "Logged In Successfully"
        },
        {
            id: uuid(),
            type: "error",
            message: "Wrong Password"
        }
    ]

    const [notifications, dispatchNotifications ] = 
        useReducer(notificationReducer, initialNotifications);



    return (
        <NotificationContext.Provider value={dispatchNotifications}>
            <>
            <div className="Notification-List">
                { notifications.map( note => (
                    <Notification key={note.id} {...note}/>
                ))}
            </div>
            {children}
            </>
        </NotificationContext.Provider>
    )
}

export function useNotificationContext() {
    return useContext(NotificationContext);
}