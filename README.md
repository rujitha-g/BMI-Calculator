# BMI Calculator

A simple and responsive BMI (Body Mass Index) Calculator built using React and Vite. Users can enter their height and weight to calculate their BMI and view their health category instantly.

## Features

* Calculate BMI using height and weight inputs
* Displays BMI value accurately
* Shows BMI category:

  * Underweight
  * Normal Weight
  * Overweight
  * Obese
* User-friendly interface
* Responsive design
* Built with React Functional Components and Hooks

## Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* CSS3

## Project Structure

```text
BMI-Calculator/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── BMICalculator.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/BMI-Calculator.git
```

Navigate to the project directory:

```bash
cd BMI-Calculator
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## BMI Formula

BMI is calculated using:

```text
BMI = Weight (kg) / Height² (m²)
```

## Example

* Weight: 70 kg
* Height: 1.75 m

BMI:

```text
70 / (1.75 × 1.75) = 22.86
```

Category:

```text
Normal Weight
```

## Future Enhancements

* BMI history tracking
* Dark mode support
* Health recommendations based on BMI
* Unit conversion (cm, feet, inches)

## Author

Rujitha G

## License

This project is created for educational and learning purposes.
