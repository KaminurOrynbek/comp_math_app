import React, { useState } from 'react';

const JacobiMethod = () => {
    const [coefficients, setCoefficients] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [results, setResults] = useState<number[]>([]);
    const [iterations, setIterations] = useState<number>(10);
    const [tolerance, setTolerance] = useState<number>(0.01);

    const handleInputChange = (index: number, value: string) => {
        const newCoefficients = [...coefficients];
        newCoefficients[index] = parseFloat(value);
        setCoefficients(newCoefficients);
    };

    const solveJacobi = () => {
        const A = [
            [3, 1, -1],
            [2, -8, 1],
            [-1, 1, 5]
        ];
        const B = [1, -2, 3];
        const x = [0, 0, 0]; // Initial guess
        const newX = [...x];
        let error = 1;
        let iter = 0;

        while (error > tolerance && iter < iterations) {
            for (let i = 0; i < A.length; i++) {
                newX[i] = B[i];
                for (let j = 0; j < A[i].length; j++) {
                    if (i !== j) {
                        newX[i] -= A[i][j] * x[j];
                    }
                }
                newX[i] /= A[i][i];
            }

            error = Math.max(...newX.map((val, idx) => Math.abs(val - x[idx])));
            setResults(newX);
            iter++;
            x.splice(0, x.length, ...newX);
        }
    };

    return (
        <div className="component">
            <h2>Jacobi Method</h2>
            <div>
                <h3>Input Coefficients</h3>
                <div className="input-group">
                    {coefficients.map((coef, index) => (
                        <input
                            key={index}
                            type="number"
                            value={coef}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <button className="button" onClick={solveJacobi}>Solve</button>
            </div>
            <div className="results">
                <h3>Results</h3>
                <p>{results.length > 0 ? `Roots: ${results.join(', ')}` : 'No results yet.'}</p>
            </div>
        </div>
    );
};

export default JacobiMethod;