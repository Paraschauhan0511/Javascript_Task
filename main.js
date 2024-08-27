function splitNumber() {
    // Get the input values
    const numberInput = document.getElementById('number').value;
    const splitsInput = document.getElementById('splits').value;
    
    const number = parseFloat(numberInput); // Convert input to a float number
    const splits = parseInt(splitsInput);   // Convert input to an integer
    
    // Get the result container element
    const resultContainer = document.getElementById('result-container');
    
    // Clear any previous results
    resultContainer.innerHTML = '';

    // Check if inputs are valid
    if (isNaN(number) || isNaN(splits) || splits <= 0) {
        alert('Please enter valid numbers for both fields.');
        return;
    }
    
    // Calculate the value for each split
    const splitValue = number / splits;
    
    // Generate the divs based on the number of splits
    for (let i = 0; i < splits; i++) {
        const div = document.createElement('div');
        div.classList.add('result-div');  // Add a class for styling
        div.textContent = splitValue.toFixed(2);  // Display the split value with 2 decimal places
        
        // Set the style of the div
        div.style.backgroundColor = getRandomColor();  // Set a random background color
        div.style.width = `${splitValue * 10}px`;      // Set width based on the split value
        
        // Add the div to the result container
        resultContainer.appendChild(div);
    }
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
