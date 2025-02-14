import React, { useState } from 'react';

const RootFindingMethods = () => {
    const [method, setMethod] = useState('falsePosition');
    const [interval, setInterval] = useState<number[]>([0, 3]);
    const [iterations, setIterations] = useState<number>(0);
    const [relativeError, setRelativeError] = useState<string[]>([]);
    const [result, setResult] = useState<string | null>(null);

    const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMethod(event.target.value);
    };

    const handleIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.split(',').map(Number);
        setInterval(value);
    };

    const handleIterationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIterations(Number(event.target.value));
    };

    const calculateRoot = () => {
        // Placeholder for root-finding logic
        let root: string = '';
        let errors: string[] = [];

        if (method === 'falsePosition') {
            // Implement False Position method logic here
            root = 'Calculated root using False Position'; // Replace with actual calculation
            errors = ['Relative error 1', 'Relative error 2']; // Replace with actual errors
        } else if (method === 'newtonRaphson') {
            // Implement Newton-Raphson method logic here
            root = 'Calculated root using Newton-Raphson'; // Replace with actual calculation
            errors = ['Relative error 1', 'Relative error 2']; // Replace with actual errors
        }

        setResult(root);
        setRelativeError(errors);
    };

    return (
        <div>
            <h2>Root Finding Methods</h2>
            <div>
                <label>
                    Select Method:
                    <select value={method} onChange={handleMethodChange}>
                        <option value="falsePosition">False Position</option>
                        <option value="newtonRaphson">Newton-Raphson</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Interval (comma separated):
                    <input type="text" value={interval.join(',')} onChange={handleIntervalChange} />
                </label>
            </div>
            <div>
                <label>
                    Number of Iterations:
                    <input type="number" value={iterations} onChange={handleIterationsChange} />
                </label>
            </div>
            <button onClick={calculateRoot}>Calculate Root</button>
            {result && <div>Result: {result}</div>}
            {relativeError.length > 0 && (
                <div>
                    <h3>Relative Errors:</h3>
                    <ul>
                        {relativeError.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RootFindingMethods;