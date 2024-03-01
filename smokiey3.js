// First function
function openFirstPopup() {
    // Set custom Referer header
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://bit.ly/melody--marks?utm_source=port', true);
    xhr.setRequestHeader('Referer', 'https://smashwatch.com');
    xhr.send();

    var popup = window.open('https://bit.ly/melody--marks?utm_source=port', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                // Include a referrer parameter in the URL
                popup = window.open('https://bit.ly/melody--marks?utm_source=port', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

window.addEventListener('load', openFirstPopup);
