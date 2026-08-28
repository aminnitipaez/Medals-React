import "../App.css";
import Medal from "./Medal";


function Country({id, name, gold, onDelete, medals}) {
    return (
        <div className ='country-card'>
            <div className ='country-header'>
            <h2>{name}</h2>
            <button className='delete-button' onClick={() =>onDelete(id)}>🗑</button>
           </div>
           {medals.map(medal => (
            <Medal key={medal.id} name={medal.name} count={gold} />
           ))}
        </div>
    );
}

export default Country;