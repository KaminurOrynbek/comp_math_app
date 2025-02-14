import React, { useState } from 'react';

const LinearCurveFitting: React.FC = () => {
    const [dataPoints, setDataPoints] = useState<string>('');
    const [fittedLine, setFittedLine] = useState<{ slope: number; intercept: number } | null>(null);
    const [error, setError] = useState<string>('');

    const handleDataPointsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDataPoints(event.target.value);
    };

    const fitLine = () => {
        try {
            const points = dataPoints.split('\n').map(line => {
                const [x, y] = line.split(',').map(Number);
                return { x, y };
            });

            const n = points.length;
            const sumX = points.reduce((sum, point) => sum + point.x, 0);
            const sumY = points.reduce((sum, point) => sum + point.y, 0);
            const sumXY = points.reduce((sum, point) => sum + point.x * point.y, 0);
            const sumX2 = points.reduce((sum, point) => sum + point.x ** 2, 0);

            const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
            const intercept = (sumY - slope * sumX) / n;

            setFittedLine({ slope, intercept });
            setError('');
        } catch (err) {
            setError('Invalid input. Please enter data points in the format "x,y" on separate lines.');
        }
    };

    return (
        <div>
            <h2>Linear Curve Fitting</h2>
            <textarea
                value={dataPoints}
                onChange={handleDataPointsChange}
                placeholder="Enter data points (x,y) on separate lines"
                rows={10}
                cols={30}
            />
            <br />
            <button onClick={fitLine}>Fit Line</button>
            {fittedLine && (
                <div>
                    <h3>Fitted Line:</h3>
                    <p>Slope: {fittedLine.slope.toFixed(2)}</p>
                    <p>Intercept: {fittedLine.intercept.toFixed(2)}</p>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LinearCurveFitting;