import { useState } from "react";
import Country from "./components/Country";

function App() {
    const [countries, setCountries] = useState([
        { id: 1, name: 'United States', gold: 2 },
        { id: 2, name: 'China', gold: 3 },
        { id: 3, name: 'France', gold: 0 },
    ]);

    const handleDelete = (id) => {
        setCountries(countries.filter(country => country.id !== id));
    };

    return (
        <div>
            {countries.map(country => (
                <Country
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    gold={country.gold}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default App;