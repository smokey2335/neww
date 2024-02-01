// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/Mia__Malkov', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Mia__Malkov', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Second function
function openSecondPopup() {
    var popup = window.open('https://bit.ly/Lana__Rhodes', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Lana__Rhodes', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Third function
function openThirdPopup() {
    var popup = window.open('https://bit.ly/Riley__Reid?utm_source=MiaMalkova', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Riley__Reid?utm_source=MiaMalkova', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Fourth function
function openFourthPopup() {
    var popup = window.open('https://bit.ly/Brandi__Love?eutm_source=brandilove', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Brandi__Love?eutm_source=brandilove', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Fifth function
function openFifthPopup() {
    var popup = window.open('https://bit.ly/Eva__Elfie?utm_source=rileyreid', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Eva__Elfie?utm_source=rileyreid', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// sixth function
function openSixthPopup() {
    var popup = window.open('https://bit.ly/Brandi__Lov?eutm_source=brandilove', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Brandi__Lov?eutm_source=brandilove', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// seventh function
function openSeventhPopup() {
    var popup = window.open('https://bit.ly/Eva__Elfie', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Eva__Elfie', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// eight function
function openEightPopup() {
    var popup = window.open('https://bit.ly/Riley__Reid', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/Riley__Reid', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// ninth function
function openNinthPopup() {
    var popup = window.open('https://bit.ly/lisa___ann', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/lisa___ann', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// tenth function
function openTenthPopup() {
    var popup = window.open('https://bit.ly/liya___silver', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/liya___silver', '_blank');
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
window.addEventListener('load', openSixthPopup);
window.addEventListener('load', openSeventhPopup);
window.addEventListener('load', openEightPopup);
window.addEventListener('load', openNinthPopup);
window.addEventListener('load', openTenthPopup);