import { useState, useRef } from "react";
import Country from "./components/Country";

function App() {
    const [countries, setCountries] = useState([
        { id: 1, name: 'United States', gold: 2 },
        { id: 2, name: 'China', gold: 3 },
        { id: 3, name: 'France', gold: 0 },
    ]);

    const medals = useRef([
  { id: 1, name: "gold" },
  { id: 2, name: "silver" },
  { id: 3, name: "bronze" },
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
                    medals={medals.current}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default App;