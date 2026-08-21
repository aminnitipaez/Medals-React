import "../App.css";


function Country({id, name, gold, onDelete}) {
    return (
        <div className ='country-card'>
            <div className ='country-header'>
            <h2>{name}</h2>
            <button className='delete-button' onClick={() =>onDelete(id)}>🗑</button>
           </div>
           <p>Gold Medals: {gold}</p>
        </div>
    );
}

export default Country;