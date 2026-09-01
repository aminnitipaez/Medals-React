import { useState, useRef } from "react";
import Country from "./components/Country";
import NewCountry from "./Components/NewCountry";

function App() {
   const [countries, setCountries] = useState([
  { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
  { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
  { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
]);

    const medals = useRef([
  { id: 1, name: "gold" },
  { id: 2, name: "silver" },
  { id: 3, name: "bronze" },
]);

    const handleDelete = (id) => {
        setCountries(countries.filter(country => country.id !== id));
    };

    const handleIncrement = (countryId, medal) => {
        const update =[...countries];
        const idx = update.findIndex(c => c.id === countryId);
        update[idx][medal] += 1;
        setCountries(update);
    };

      const handleDecrement = (countryId, medal) => {
        const update =[...countries];
        const idx = update.findIndex(c => c.id === countryId);
        if (update[idx][medal] > 0) {
            update[idx][medal] -= 1;
        }
        setCountries(update);
    };

     const getTotalMedalCount = (medal) => {
        return countries.reduce((sum, country) => sum + country[medal], 0);
    };

    const grandTotal = getTotalMedalCount("gold") + getTotalMedalCount("silver") + getTotalMedalCount("bronze");

    const handleAddCountry = (name) => {
        const newCountry = {
            id: Date.now(),
            name: name,
            gold: 0,
            silver: 0,
            bronze: 0
        };
        setCountries([...countries, newCountry]);
    };

    return (
        <div>
            <h1>Olympic Medals {grandTotal}</h1>
            {countries.map(country => (
                <Country
                    key={country.id}
                    country={country}
                    medals={medals.current}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}

            <NewCountry onAdd={handleAddCountry} />

        </div>
    );
}

export default App;