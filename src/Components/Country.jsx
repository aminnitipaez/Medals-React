import { useState } from "react";
import "../App.css";


function Country() {
    const [name] = useState('United States');
    const [gold, setGold] = useState(0);

    const handleClick = () => {
        setGold(gold + 1);
    };

    return (
        <div>
            <span className="medal-text">{name} gold medals: {gold}</span>
            <button className='medal-button' onClick={handleClick}>+</button>
           <hr/>
        </div>
    );
}

export default Country;