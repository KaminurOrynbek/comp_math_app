# Numerical Methods Application

This project is a web application that implements various numerical methods for solving mathematical problems. It provides an interactive interface for users to input parameters, select methods, and visualize results.

## Features

- **Graphical Method**: Plot the function f(x) = cos(x) - x and find an approximate root within the range [0, 1].
- **Root-Finding Methods**: Implement False Position and Newton-Raphson methods to find the root of f(x) = x² - 4sin(x) in the interval [0, 3].
- **Jacobi Method**: Solve systems of linear equations using the Jacobi iterative method.
- **Matrix Inversion**: Compute the inverse of a matrix using an iterative method.
- **Linear Curve Fitting**: Fit a line to a set of data points using the least squares method.
- **Newton's Forward Difference**: Estimate the first derivative of a function using Newton’s Forward Difference Formula.
- **Taylor Series Method**: Solve differential equations using the Taylor series method.
- **Simpson’s 3/8 Rule**: Perform numerical integration using Simpson’s 3/8 Rule.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/numerical-methods-app.git
   ```
2. Navigate to the project directory:
   ```
   cd numerical-methods-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.

## Components

- **GraphicalMethod.tsx**: Allows users to plot functions and find roots graphically.
- **RootFindingMethods.tsx**: Provides options for root-finding methods and displays results.
- **JacobiMethod.tsx**: Interface for solving linear equations using the Jacobi method.
- **MatrixInversion.tsx**: Computes the inverse of a matrix with user-defined inputs.
- **LinearCurveFitting.tsx**: Fits a line to user-provided data points.
- **NewtonForwardDifference.tsx**: Estimates derivatives from given data points.
- **TaylorSeriesMethod.tsx**: Solves differential equations using Taylor series.
- **SimpsonsRule.tsx**: Implements numerical integration using Simpson’s 3/8 Rule.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.