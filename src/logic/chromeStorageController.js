const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!urlPattern.test(urlString);
}

document.getElementById("save-button").addEventListener("click", function (event) {
    event.preventDefault();

    // User inputs
    var fileInput = document.getElementsByClassName("image-file-input")[0];
    var nameInput = document.getElementsByClassName("name-input")[0].value;
    var urlInputValue = document.getElementsByClassName("url-input")[0].value;

    if (urlInputValue && fileInput && nameInput) {
        var url = getValidURL(urlInputValue);
        if (url === null) {
            alert("URL is not valid");
            return;
        }

        var imageURL = "";
        var fileInputValue = fileInput.files[0];

        var reader = new FileReader();
        reader.onload = function (event) {
            imageURL = event.target.result;

            chrome.storage.local.get(["items"]).then((result) => {
                var items = result.items;

                var newItem = {
                    "name": nameInput,
                    "url": url,
                    "imageFileUrl": imageURL
                };

                if (items && items.length > 0) {
                    items.push(newItem);
                } else {
                    items = [newItem];
                }

                updateItems(items, newItem);
            })
        };
        reader.readAsDataURL(fileInputValue);
    } else {
        alert("Please choose an URL, image file and name");
    }
});

function getItemsFromStorage(callback) {
    chrome.storage.local.get(["items"]).then((result) => {
        var items = result.items;
        callback(items);
    })
}

function clearStorage() {
    chrome.storage.local.clear(function () {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
    chrome.storage.sync.clear();
}

function removeItem(items, itemToRemove) {
    var filtered = items.filter(function(item) { return item.name != itemToRemove.name && item.url != itemToRemove.url})

    updateItems(filtered);
}

function updateItems(items, newItem) {
    chrome.storage.local.set({ items: items }).then(() => {
        if (newItem) {
            addNewItem(newItem);
        }

        toggleNewItemForm();
        addDragAndDropEventListeners();
    })
}

function getValidURL(url) {
    const comProtocol = "https://";
    
    if (!isValidUrl(url)) {
        return null;
    }

    return url.startsWith(comProtocol) ? url : comProtocol + url;
}