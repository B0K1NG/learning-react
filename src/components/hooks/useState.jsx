// import React, { useState } from 'react';

// function Bulbs() {
//     const [on, setOn] = useState(false);
//     const lightOn = () => setOn(true);
//     const lightOff = () => setOn(false);

//     return(
//     <div>
//         <div className={on ? "bulb-on" : "bulb-off"} />
//         <button onClick={lightOn}>On</button>
//         <button onClick={lightOff}>Off</button>
//     </div>
//     )
// }

// export default Bulbs;

// To have less code do it like this:
import React, { useState } from 'react';

function Bulbs() {
    const [on, setOn] = useState(false);
    const [count, setCount] = useState(0);

    const lightSwitch = () => setOn(on => !on);
    const addBulbs = () => setCount(prevState => prevState + 1);

    const bulb = <div className={on ? "bulb-on" : "bulb-off"} />;
    const bulbs = Array(count).fill(bulb);

    return(
    <div>
        <div className="bulbs">{bulbs}</div>
            <button onClick={lightSwitch}>On/Off</button>
            <button onClick={addBulbs}>Add Bulbs</button>
    </div>
    )
}

export default Bulbs;