initializeBackgroundImage();

function initializeBackgroundImage() {
    chrome.storage.local.get(["background"]).then((result) => {
        console.log("Value is " + result.background);
        document.body.style.backgroundImage = 'url(' + result.background + ')';
    });
}