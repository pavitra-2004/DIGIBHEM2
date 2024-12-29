function validateForm() {
    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const days = document.getElementById("days").value;
    const advance = document.getElementById("advance").value;

    if (!name || !checkin || !days || !advance) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please fill in all required fields.',
            confirmButtonText: 'OK'
        });
        return false; // Prevent form submission
    }

    if (days <= 0 || isNaN(days)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Total days must be a positive number.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    if (advance < 0 || isNaN(advance)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Advance payment must be a valid number greater than or equal to 0.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    return true; // Proceed to calculate costs
}

function calculateCosts() {
    // Get form data
    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const days = document.getElementById("days").value;
    const advance = document.getElementById("advance").value;
    const persons = document.getElementById("persons").value;

    // Validate required fields
    let isValid = true;

    // Clear previous error states
    clearErrorStyles();

    if (!name || !checkin || !days || !advance) {
        isValid = false;
        showError("name", "Please fill out this field.");
        showError("checkin", "Please fill out this field.");
        showError("days", "Please fill out this field.");
        showError("advance", "Please fill out this field.");
    }

    if (days <= 0 || isNaN(days)) {
        isValid = false;
        showError("days", "Total days must be a positive number.");
    }

    if (advance < 0 || isNaN(advance)) {
        isValid = false;
        showError("advance", "Advance payment must be a valid number greater than or equal to 0.");
    }

    if (!isValid) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please correct the errors in the form.',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Proceed with calculation if validation passes
    const roomRates = { Delux: 3000, Suite: 5000 };
    const amenitiesRates = { AC: 500, Locker: 200 };
    const extraPersonCharge = 1000;

    const roomType = document.getElementById("roomType").value;
    const acChecked = document.getElementById("ac").checked;
    const lockerChecked = document.getElementById("locker").checked;

    // Calculate costs
    let roomCost = roomRates[roomType] * days;
    let amenitiesCost = 0;
    if (acChecked) amenitiesCost += amenitiesRates.AC * days;
    if (lockerChecked) amenitiesCost += amenitiesRates.Locker * days;

    let extraCost = persons > 2 ? (persons - 2) * extraPersonCharge * days : 0;
    let totalCost = roomCost + amenitiesCost + extraCost;
    let balance = totalCost - advance;

    // Display the calculated values
    document.getElementById("roomCost").value = roomCost.toFixed(2);
    document.getElementById("amenitiesCost").value = amenitiesCost.toFixed(2);
    document.getElementById("extraCost").value = extraCost.toFixed(2);
    document.getElementById("totalCost").value = totalCost.toFixed(2);
    document.getElementById("balance").value = balance.toFixed(2);

    // Show success message
    Swal.fire({
        icon: 'success',
        title: 'Cost Calculated',
        text: 'The total costs have been successfully calculated.',
        confirmButtonText: 'OK'
    });
}

// Function to highlight the error field
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.style.borderColor = "red"; // Highlight with red border
    element.focus(); // Focus on the element to show error
}

// Function to reset the border color when the user starts typing
function resetErrorStyles(event) {
    event.target.style.borderColor = ""; // Reset the border color when user starts typing
}

// Function to clear all error styles
function clearErrorStyles() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.borderColor = ""; // Reset the border color
    });
}

// Attach event listeners for resetting border color on input change
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', resetErrorStyles); // Reset the border color when typing
});

function printForm() {
    window.print();
}