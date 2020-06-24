let isInitialized = false;

// For hiding unnecessary stuff
function hide(selector) {
    const node = document.querySelector(selector);

    if (node) {
        node.style.display = 'none';
    }
}

function hideNodes() {
    // Hide comments
    // They are too distracting!
    hide('#comments');

    // Hide related videos
    // You don't have time to watch them!
    hide('#related');

    // Hide notification bell button.
    // So it won't distract you in the future!
    hide('#notification-preference-button');

    // TODO: Hide recommended videos
    // hide('.ytd-two-column-browse-results-renderer');

    const items = document.querySelector('#items');

    if (!items || items.children.length < 2) {
        return;
    }

    // home
    items.children[0].style.display = 'none';
    // trending
    items.children[1].style.display = 'none';
}

function init() {
    if (isInitialized) {
        return;
    }

    isInitialized = true;
    hideNodes();
}

document.body.onload = hideNodes;
window.onload = hideNodes;
