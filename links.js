// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/brandi---love', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/brandi---love', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Second function
function openSecondPopup() {
    var popup = window.open('https://bit.ly/liya__silver', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/liya__silver', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Third function
function openThirdPopup() {
    var popup = window.open('https://bit.ly/nancy__ace', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/nancy__ace', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Fourth function
function openFourthPopup() {
    var popup = window.open('https://bit.ly/elly__clutch', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/elly__clutch', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Fifth function
function openFifthPopup() {
    var popup = window.open('https://bit.ly/lacy--lennon', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/lacy--lennon', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Add event listeners for each function on page load
window.addEventListener('load', openFirstPopup);
window.addEventListener('load', openSecondPopup);
window.addEventListener('load', openThirdPopup);
window.addEventListener('load', openFourthPopup);
window.addEventListener('load', openFifthPopup);
