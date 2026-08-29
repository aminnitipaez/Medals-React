function Medal ({country, medalName, onIncrement, onDecrement}) {
    const count = country[medalName];

    return (
      <p>
            {medalName} medals:
            <button
                className="medal-btn"
                onClick={() => onDecrement(country.id, medalName)}
                disabled={count === 0}
            >
                -
            </button>
            {count}
            <button
                className="medal-btn"
                onClick={() => onIncrement(country.id, medalName)}
            >
                +
            </button>
        </p>
    );
}


export default Medal;
