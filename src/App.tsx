import React from 'react';
import GraphicalMethod from './components/GraphicalMethod';
import RootFindingMethods from './components/RootFindingMethods';
import JacobiMethod from './components/JacobiMethod';
import MatrixInversion from './components/MatrixInversion';
import LinearCurveFitting from './components/LinearCurveFitting';
import NewtonForwardDifference from './components/NewtonForwardDifference';
import TaylorSeriesMethod from './components/TaylorSeriesMethod';
import SimpsonsRule from './components/SimpsonsRule';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Numerical Methods Application</h1>
            <GraphicalMethod />
            <RootFindingMethods />
            <JacobiMethod />
            <MatrixInversion />
            <LinearCurveFitting />
            <NewtonForwardDifference />
            <TaylorSeriesMethod />
            <SimpsonsRule />
        </div>
    );
}

export default App;