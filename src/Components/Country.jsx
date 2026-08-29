import "../App.css";
import Medal from "./Medal";


function Country({country, medals, onDelete, onIncrement, onDecrement}) {
    const countryTotal = country.gold + country.silver + country.bronze;

    return (
        <div className ='country-card'>
            <div className ='country-header'>
            <h2>{country.name}</h2>
            <span>{countryTotal}</span>
            <button className='delete-button' onClick={() =>onDelete(country.id)}>🗑</button>
           </div>
           {medals.map(medal => (
            <Medal 
             key={medal.id}
             country={country} 
             medalName={medal.name}
             onIncrement={onIncrement}
             onDecrement={onDecrement}
              />
           ))}
        </div>
    );
}

export default Country;