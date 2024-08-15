initializeBackgroundImage();

function initializeBackgroundImage() {
    chrome.storage.local.get(["background"]).then((result) => {
        if (result.background) {
            document.body.style.backgroundImage = "url('NewTab/imgs/defaultBackground.png')";
        } else {
            console.log("Value is " + result.background);
            document.body.style.backgroundImage = 'url(' + result.background + ')';
        }
    });
}