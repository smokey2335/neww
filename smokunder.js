// Popunder function
function openFirstPopunder() {
    var popunder = window.open('https://bit.ly/liya___silver', '_blank', 'width=1,height=1,toolbar=no,scrollbars=no,resizable=no,status=no');

    function attemptOpen() {
        if (popunder === null || typeof(popunder) === 'undefined' || popunder.closed) {
            setTimeout(function() {
                popunder = window.open('https://bit.ly/liya___silver', '_blank', 'width=1,height=1,toolbar=no,scrollbars=no,resizable=no,status=no');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

window.addEventListener('load', openFirstPopunder);
