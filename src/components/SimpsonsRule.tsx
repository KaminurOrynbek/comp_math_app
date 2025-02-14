import React, { useState } from 'react';

const SimpsonsRule = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [n, setN] = useState<number>(6);
    const [result, setResult] = useState<number | null>(null);
    const [absoluteError, setAbsoluteError] = useState<number | null>(null);
    const [exactValue, setExactValue] = useState<number>(0); // Set the exact value for comparison

    const handleCalculate = () => {
        const h = (b - a) / n;
        let sum = 0;

        for (let i = 0; i <= n; i++) {
            const x = a + i * h;
            const fx = 2 * Math.pow(x, 3); // Function to integrate
            if (i === 0 || i === n) {
                sum += fx;
            } else if (i % 3 === 0) {
                sum += 2 * fx;
            } else {
                sum += 3 * fx;
            }
        }

        const integralValue = (3 * h / 8) * sum;
        setResult(integralValue);
        setAbsoluteError(Math.abs(exactValue - integralValue));
    };

    return (
        <div className="component">
            <h2>Simpson's 3/8 Rule</h2>
            <div className="input-group">
                <label>
                    Lower Limit (a):
                    <input type="number" value={a} onChange={(e) => setA(parseFloat(e.target.value))} />
                </label>
                <label>
                    Upper Limit (b):
                    <input type="number" value={b} onChange={(e) => setB(parseFloat(e.target.value))} />
                </label>
                <label>
                    Number of Subintervals (n):
                    <input type="number" value={n} onChange={(e) => setN(parseInt(e.target.value))} />
                </label>
                <button className="button" onClick={handleCalculate}>Calculate</button>
            </div>
            {result !== null && (
                <div className="results">
                    <h3>Results</h3>
                    <p>Computed Integral Value: {result}</p>
                    <p>Absolute Error: {absoluteError}</p>
                </div>
            )}
        </div>
    );
};

export default SimpsonsRule;