// Function to display the current date
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();

    // Format the date (e.g., September 21, 2024)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    // Set the formatted date with the "Today's Date:" prefix
    dateElement.textContent = `Today's Date: ${formattedDate}`;
}

// Call the function when the window loads
window.onload = displayCurrentDate;
