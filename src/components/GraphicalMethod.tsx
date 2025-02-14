import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const GraphicalMethod = () => {
    const [root, setRoot] = useState<number | null>(null);
    const [absoluteError, setAbsoluteError] = useState<number | null>(null);
    const [dataPoints, setDataPoints] = useState<{ x: number[], y: number[] }>({ x: [], y: [] });

    const calculateGraph = () => {
        const xValues: number[] = [];
        const yValues: number[] = [];
        const step = 0.01;

        for (let x = 0; x <= 1; x += step) {
            xValues.push(x);
            yValues.push(Math.cos(x) - x);
        }

        const approxRoot = findApproximateRoot(yValues, step);
        const exactRoot = 0.739085; // Known root of cos(x) - x

        if (approxRoot !== null) {
            const error = Math.abs(exactRoot - approxRoot);
            setRoot(approxRoot);
            setAbsoluteError(error);
        } else {
            setRoot(null);
            setAbsoluteError(null);
        }

        setDataPoints({ x: xValues, y: yValues });
    };

    const findApproximateRoot = (yValues: number[], step: number): number | null => {
        for (let i = 1; i < yValues.length; i++) {
            if (yValues[i - 1] * yValues[i] < 0) {
                return (i - 1) * step; // Approximate root
            }
        }
        return null;
    };

    const chartData = {
        labels: dataPoints.x,
        datasets: [
            {
                label: 'f(x) = cos(x) - x',
                data: dataPoints.y,
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    };

    return (
        <div className="component">
            <h2>Graphical Method for f(x) = cos(x) - x</h2>
            <button className="button" onClick={calculateGraph}>Calculate Graph</button>
            {root !== null && (
                <div className="results">
                    <h3>Approximate Root: {root}</h3>
                    <h3>Absolute Error: {absoluteError}</h3>
                </div>
            )}
            <Line data={chartData} />
        </div>
    );
};

export default GraphicalMethod;