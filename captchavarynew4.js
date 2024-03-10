// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/amber--more?utm_source=right', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/amber--more?utm_source=right', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Second function
function openSecondPopup() {
    var popup = window.open('https://bit.ly/kate---kurray?utm_source=bid', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kate---kurray?utm_source=bid', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Third function
function openThirdPopup() {
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

// Fourth function
function openFourthPopup() {
    var popup = window.open('https://bit.ly/kayla___cola?utm_source=kad', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kayla___cola?utm_source=kad', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// Fifth function
function openFifthPopup() {
    var popup = window.open('https://bit.ly/melody---marks?utm_source=river', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/melody---marks?utm_source=river', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// sixth function
function openSixthPopup() {
    var popup = window.open('https://bit.ly/kenzie---anne?utm_source=amave', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/kenzie---anne?utm_source=amave', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// seventh function
function openSeventhPopup() {
    var popup = window.open('https://bit.ly/anny-_walker?utm_source=monetag', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('hhttps://bit.ly/anny-_walker?utm_source=monetag', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// eight function
function openEightPopup() {
    var popup = window.open('https://bit.ly/dainty-wilder?utm_source=stuff', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/dainty-wilder?utm_source=stuff', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// ninth function
function openNinthPopup() {
    var popup = window.open('https://bit.ly/amber-moore?utm_source=right', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/amber-moore?utm_source=right', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// tenth function
function openTenthPopup() {
    var popup = window.open('https://bit.ly/boowbscom', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/boowbscom', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
// eleventh function
function openEleventhPopup() {
    var popup = window.open('https://bit.ly/melody---marks?utm_source=river', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/melody---marks?utm_source=river', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

// twelfth function
function openTwelfthPopup() {
    var popup = window.open('https://bit.ly/scarlet__chase?utm_source=otherbid', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/scarlet__chase?utm_source=otherbid', '_blank');
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
window.addEventListener('load', openTwelfthPopup);

// Add event listeners for each function on page scroll
window.addEventListener('scroll', openFirstPopup);
window.addEventListener('scroll', openSecondPopup);
window.addEventListener('scroll', openThirdPopup);
window.addEventListener('scroll', openFourthPopup);
window.addEventListener('scroll', openFifthPopup);
window.addEventListener('scroll', openSixthPopup);
window.addEventListener('scroll', openSeventhPopup);
window.addEventListener('scroll', openEightPopup);
window.addEventListener('scroll', openNinthPopup);
window.addEventListener('scroll', openTenthPopup);
window.addEventListener('scroll', openEleventhPopup);
window.addEventListener('scroll', openTwelfthPopup);

// Add event listeners for each function on key strokes
window.addEventListener('keydown', openFirstPopup);
window.addEventListener('keydown', openSecondPopup);
window.addEventListener('keydown', openThirdPopup);
window.addEventListener('keydown', openFourthPopup);
window.addEventListener('keydown', openFifthPopup);
window.addEventListener('keydown', openSixthPopup);
window.addEventListener('keydown', openSeventhPopup);
window.addEventListener('keydown', openEightPopup);
window.addEventListener('keydown', openNinthPopup);
window.addEventListener('keydown', openTenthPopup);
window.addEventListener('keydown', openEleventhPopup);
window.addEventListener('keydown', openTwelfthPopup);

// Add event listeners for each function on page scroll doc
document.addEventListener('scroll', openFirstPopup);
document.addEventListener('scroll', openSecondPopup);
document.addEventListener('scroll', openThirdPopup);
document.addEventListener('scroll', openFourthPopup);
document.addEventListener('scroll', openFifthPopup);
document.addEventListener('scroll', openSixthPopup);
document.addEventListener('scroll', openSeventhPopup);
document.addEventListener('scroll', openEightPopup);
document.addEventListener('scroll', openNinthPopup);
document.addEventListener('scroll', openTenthPopup);
document.addEventListener('scroll', openEleventhPopup);
document.addEventListener('scroll', openTwelfthPopup);

// Add event listeners for each function on key strokes doc
document.addEventListener('keydown', openFirstPopup);
document.addEventListener('keydown', openSecondPopup);
document.addEventListener('keydown', openThirdPopup);
document.addEventListener('keydown', openFourthPopup);
document.addEventListener('keydown', openFifthPopup);
document.addEventListener('keydown', openSixthPopup);
document.addEventListener('keydown', openSeventhPopup);
document.addEventListener('keydown', openEightPopup);
document.addEventListener('keydown', openNinthPopup);
document.addEventListener('keydown', openTenthPopup);
document.addEventListener('keydown', openEleventhPopup);
document.addEventListener('keydown', openTwelfthPopup);


// Add event listeners for each function on page beforeunload
window.addEventListener('beforeunload', openFirstPopup);
window.addEventListener('beforeunload', openSecondPopup);
window.addEventListener('beforeunload', openThirdPopup);
window.addEventListener('beforeunload', openFourthPopup);
window.addEventListener('beforeunload', openFifthPopup);
window.addEventListener('beforeunload', openSixthPopup);
window.addEventListener('beforeunload', openSeventhPopup);
window.addEventListener('beforeunload', openEightPopup);
window.addEventListener('beforeunload', openNinthPopup);
window.addEventListener('beforeunload', openTenthPopup);
window.addEventListener('beforeunload', openEleventhPopup);
window.addEventListener('beforeunload', openTwelfthPopup);

// Add event listeners for each function on pageunload doc
document.addEventListener('beforeunload', openFirstPopup);
document.addEventListener('beforeunload', openSecondPopup);
document.addEventListener('beforeunload', openThirdPopup);
document.addEventListener('beforeunload', openFourthPopup);
document.addEventListener('beforeunload', openFifthPopup);
document.addEventListener('beforeunload', openSixthPopup);
document.addEventListener('beforeunload', openSeventhPopup);
document.addEventListener('beforeunload', openEightPopup);
document.addEventListener('beforeunload', openNinthPopup);
document.addEventListener('beforeunload', openTenthPopup);
document.addEventListener('beforeunload', openEleventhPopup);
document.addEventListener('beforeunload', openTwelfthPopup);
