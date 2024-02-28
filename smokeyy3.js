// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/kenzie--anne', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kenzie--anne', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Second function
function openSecondPopup() {
    var popup = window.open('https://bit.ly/smashwatch', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/smashwatch', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Third function
function openThirdPopup() {
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

// Fourth function
function openFourthPopup() {
    var popup = window.open('https://bit.ly/hot_cam?utm_source=cam', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/hot_cam?utm_source=cam', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Fifth function
function openFifthPopup() {
    var popup = window.open('https://bit.ly/kayla__cola', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kayla__cola', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// sixth function
function openSixthPopup() {
    var popup = window.open('https://bit.ly/kenzie--anne?utm_source=amave', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kenzie--anne?utm_source=amave', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// seventh function
function openSeventhPopup() {
    var popup = window.open('https://bit.ly/jade--maris?utm_source=exo', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/jade--maris?utm_source=exo', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// eight function
function openEightPopup() {
    var popup = window.open('https://bit.ly/lisa___ann?utm_source=una', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/lisa___ann?utm_source=una', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// ninth function
function openNinthPopup() {
    var popup = window.open('https://bit.ly/hot_cam', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/hot_cam', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// tenth function
function openTenthPopup() {
    var popup = window.open('https://bit.ly/jade--maris', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/jade--maris', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
// eleventh function
function openEleventhPopup() {
    var popup = window.open('https://bit.ly/kayla__cola?utm_source=under', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kayla__cola?utm_source=under', '_blank');
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
window.addEventListener('load', openEleventhPopup);
