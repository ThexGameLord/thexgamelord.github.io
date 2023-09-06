// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const targetDateString = urlParams.get('date');
const eventName = urlParams.get('name');

// Check if date and event name are provided in the URL
if (targetDateString && eventName) {
    // Parse the target date and time
    const targetDate = new Date(targetDateString).getTime();

    // Update the meta description with the event name
    const metaDescription = document.getElementById('meta-description');
    metaDescription.setAttribute('content', `A friend sent this countdown for ${eventName}`);

    // Update the title of the page with the event name
    const pageTitle = document.getElementById('meta-title');
    pageTitle.textContent = `${eventName} Countdown`;

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        if (timeRemaining <= 0) {
            // If the countdown is over, display a message
            document.getElementById('countdown').innerHTML = `<h1>${eventName} Countdown Over!</h1>`;
        } else {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the HTML elements with the countdown values
            document.getElementById('countdown-heading').textContent = `${eventName} Countdown`;
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initialize the countdown when the page loads
    updateCountdown();
} else {
    // If date and event name are not provided, display an error message
    document.getElementById('countdown').innerHTML = '<h1>Error: Date and Event Name not specified in the URL</h1>';
}
