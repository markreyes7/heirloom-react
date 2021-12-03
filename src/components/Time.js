import React, { useState, useEffect } from 'react';
const Time = () => {
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();    
    var seconds = today.getSeconds();
    var time = today.getHours() + ":" + today.getMinutes() + ":";
    var timeDate = time+' '+date;

    const [timer, setTimer] = useState(seconds);
    useEffect(() => {const interval = setInterval(() => setTimer(timer), 1000);
        return () => {
          clearInterval(interval);
        };})


    return (
        <>
            <>{timer}</>
        </>
    )
}

export default Time
