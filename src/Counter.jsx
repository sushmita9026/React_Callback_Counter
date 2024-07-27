import React, { useState, useCallback } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrease = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(0);
    }, []);

    return (
        <div className="counter-container">
            <h1>Square: {count * count}</h1>
            <div className="counter-display">
                {count}
            </div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
