// Function to open a new tab and redirect to the hosting top location URL
function openNewTab(url, utmSource, isLastTab) {
    var popup = window.open(url, '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open(url, '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        } else if (isLastTab) {
            // Call the function to redirect the last tab to the original top location URL
            redirectToOriginalTopLocation();
        }
    }

    attemptOpen();
}

// Function to redirect the last tab to the original top location URL
function redirectToOriginalTopLocation() {
    window.top.location.href = window.top.location.href;
}

// Event listener for when the window loads
window.addEventListener('load', function() {
    openNewTab('https://bit.ly/kenzie--anne', 'mave', false);
    openNewTab('https://bit.ly/kate--kuray', 'bid', false);
    openNewTab('https://bit.ly/lisa___ann', 'una', false);
    openNewTab('https://bit.ly/kayla__cola', 'under', false);
    openNewTab('https://bit.ly/melody__marks', 'river', false);
    openNewTab('https://bit.ly/kenzie--anne', 'amave', false);
    openNewTab('https://bit.ly/anny___walker', 'monetag', false);
    openNewTab('https://bit.ly/kenzie--anne', 'amaven', false);
    openNewTab('https://bit.ly/kayla__cola', 'under2', false);
    openNewTab('https://bit.ly/boowbs', '', false);
    openNewTab('https://bit.ly/melody__marks', 'rivertr', true); // Set isLastTab to true for the last tab
    openNewTab('https://bit.ly/scarlet_chase', 'underother', false);
});
