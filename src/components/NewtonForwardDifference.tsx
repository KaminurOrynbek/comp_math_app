import React, { useState } from 'react';

const NewtonForwardDifference: React.FC = () => {
    const [dataPoints, setDataPoints] = useState<string>('');
    const [xValue, setXValue] = useState<number | ''>('');
    const [estimatedDerivative, setEstimatedDerivative] = useState<number | null>(null);

    const handleDataPointsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDataPoints(event.target.value);
    };

    const handleXValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setXValue(Number(event.target.value));
    };

    const calculateDerivative = () => {
        const points = dataPoints.split('\n').map(line => line.split(',').map(Number));
        const x = xValue;

        if (points.length < 2 || typeof x !== 'number' || isNaN(x)) {
            alert('Please enter valid data points and x value.');
            return;
        }

        const n = points.length;
        const h = points[1][0] - points[0][0]; // Assuming uniform spacing
        let derivative = 0;

        for (let i = 0; i < n; i++) {
            const term = (i % 2 === 0 ? 1 : -1) * (points[i][1] / factorial(i)) * (Math.pow((x - points[0][0]), i));
            derivative += term;
        }

        setEstimatedDerivative(derivative / h);
    };

    const factorial = (num: number): number => {
        return num <= 1 ? 1 : num * factorial(num - 1);
    };

    return (
        <div>
            <h2>Newton's Forward Difference Formula</h2>
            <textarea
                rows={5}
                placeholder="Enter data points as x,y (one per line)"
                value={dataPoints}
                onChange={handleDataPointsChange}
            />
            <br />
            <input
                type="number"
                placeholder="Enter x value"
                value={xValue}
                onChange={handleXValueChange}
            />
            <br />
            <button onClick={calculateDerivative}>Calculate Derivative</button>
            {estimatedDerivative !== null && (
                <div>
                    <h3>Estimated Derivative at x = {xValue}: {estimatedDerivative}</h3>
                </div>
            )}
        </div>
    );
};

export default NewtonForwardDifference;