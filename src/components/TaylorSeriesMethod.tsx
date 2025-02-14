import React, { useState } from 'react';

const TaylorSeriesMethod = () => {
    const [xValue, setXValue] = useState<number>(0);
    const [result, setResult] = useState<{ y: number, error: number }>({ y: 0, error: 0 });

    const calculateTaylorSeries = (x: number): number => {
        const y0 = 1; // Initial condition y(0) = 1
        const h = 0.1; // Step size
        const n = 3; // Number of terms in Taylor series

        let y = y0;
        let factorial = 1;

        for (let i = 1; i <= n; i++) {
            factorial *= i; // Calculate factorial
            const term = Math.pow(x, i) / factorial; // Calculate x^i / i!
            y += term * Math.pow(y0, i - 1); // Add term to y
        }

        return y;
    };

    const handleCalculate = () => {
        const yAtX = calculateTaylorSeries(xValue);
        const exactValue = Math.exp(xValue); // Assuming we compare with e^x for demonstration
        const error = Math.abs(exactValue - yAtX);
        setResult({ y: yAtX, error });
    };

    return (
        <div>
            <h2>Taylor Series Method</h2>
            <div>
                <label>
                    Enter x value:
                    <input
                        type="number"
                        value={xValue}
                        onChange={(e) => setXValue(parseFloat(e.target.value))}
                    />
                </label>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
            <div>
                <h3>Results:</h3>
                <p>y({xValue}) = {result.y}</p>
                <p>Absolute Error = {result.error}</p>
            </div>
        </div>
    );
};

export default TaylorSeriesMethod;