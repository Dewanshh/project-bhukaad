import React, {useState} from "react";



function Countdown() {
    let time = new Date().toLocaleTimeString();
    const [currTime, checkTime] = useState(time);

    function getTime() {
        checkTime(new Date().toLocaleTimeString());
    }

    setInterval(getTime, 1000);

    return (
        <div className="countdown-message">
            <h1>This time slot will end in {currTime}</h1>;
        </div> 
    );
}

export default Countdown;