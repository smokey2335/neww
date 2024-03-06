// Popunder function
function openFirstPopunder() {
    var popunder = null;

    function attemptOpen() {
        if (popunder === null || typeof(popunder) === 'undefined' || popunder.closed) {
            var options = 'width=1,height=1,toolbar=no,scrollbars=no,resizable=no,status=no';
            
            // Check if the browser is in full-screen mode
            if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
                options += ',fullscreen=yes';
            }

            popunder = window.open('https://bit.ly/liya___silver', '_blank', options);
            attemptOpen(); // Retry recursively
        }
    }

    attemptOpen();
}

window.addEventListener('load', openFirstPopunder);
