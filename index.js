
function CALC() {
    // Get input values
    const Lift = document.getElementById('LIFT').valueAsNumber;
    const Repetitions = document.getElementById('REPETITIONS').valueAsNumber;
    // Calculate One Rep Max (ORM)
    let ORM = Lift * (1 + 0.0333 * Repetitions);
    // Display the result
    let resultDisplay = document.getElementById('RESULT');
    if (resultDisplay) {
        resultDisplay.textContent = `Your One Rep Max is: ${ORM.toFixed(2)}`;
    }
}
// Add event listener to the Calculate button
const calculateButton = document.getElementById('CALCULATE');
if (calculateButton) {
    calculateButton.addEventListener('click', CALC);
}
