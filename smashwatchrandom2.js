var links = [
    'https://bit.ly/smashwatchkad',
    'https://bit.ly/dainty-wilder?utm_source=stuff',
    'https://bit.ly/smashwatchriver?utm_source=river',
    'https://bit.ly/lisa___ann?utm_source=una',
    'https://bit.ly/smashwatchriver',
    'https://bit.ly/smashwatchbid',
    'https://bit.ly/smashwatchmaven',
    'https://bit.ly/tagmone?utm_source=mone'
];

var linksCounter = {};
var popupsOpened = 0;
var totalLinks = links.length * 2; // Each link opens twice

function openPopup(link) {
    var popup = window.open(link, '_blank');
    if (popup) {
        popupsOpened++;
        popup.addEventListener('beforeunload', function () {
            popupsOpened--;
            if (popupsOpened === 0) {
                attemptOpen();
            }
        });
    }
}

function attemptOpen() {
    if (popupsOpened < totalLinks) {
        var randomIndex = Math.floor(Math.random() * links.length);
        var randomLink = links[randomIndex];
        
        // Check if the link has been opened twice already
        if (linksCounter[randomLink] && linksCounter[randomLink] >= 2) {
            attemptOpen(); // Retry with a new link
        } else {
            openPopup(randomLink);
            linksCounter[randomLink] = (linksCounter[randomLink] || 0) + 1;
        }
    }
}

function triggerOpenFirstPopup() {
    openPopup(links[Math.floor(Math.random() * links.length)]);
}

window.addEventListener('load', triggerOpenFirstPopup);
window.addEventListener('scroll', triggerOpenFirstPopup);
window.addEventListener('keydown', triggerOpenFirstPopup);
document.addEventListener('scroll', triggerOpenFirstPopup);
document.addEventListener('keydown', triggerOpenFirstPopup);
window.addEventListener('beforeunload', triggerOpenFirstPopup);
document.addEventListener('beforeunload', triggerOpenFirstPopup);
window.addEventListener('click', triggerOpenFirstPopup);
document.addEventListener('click', triggerOpenFirstPopup);
window.addEventListener('mousewheel', triggerOpenFirstPopup);
document.addEventListener('mousewheel', triggerOpenFirstPopup);
window.addEventListener('touchstart', triggerOpenFirstPopup);
document.addEventListener('touchstart', triggerOpenFirstPopup);
window.addEventListener('touchmove', triggerOpenFirstPopup);
document.addEventListener('touchmove', triggerOpenFirstPopup);
window.addEventListener('touchend', triggerOpenFirstPopup);
document.addEventListener('touchend', triggerOpenFirstPopup);
window.addEventListener('unload', triggerOpenFirstPopup);
document.addEventListener('unload', triggerOpenFirstPopup);
