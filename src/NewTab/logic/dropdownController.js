var removeItemIconsActive = false;

document.getElementById("close-button").addEventListener("click", function () {
    toggleNewItemForm();
});

document.getElementById("openNewItemForm").addEventListener("click", function (event) {
    event.preventDefault();

    toggleNewItemForm();
});

document.getElementById("openNewBackgroundForm").addEventListener("click", function (event) {
    event.preventDefault();

    toggleNewBackgroundForm();
});

document.getElementById("removeItems").addEventListener("click", function (event) {
    event.preventDefault();

    toggleRemoveItemIcons();
});


function clearItemFormInputFields() {
    document.getElementsByClassName("name-input")[0].value = "";
    document.getElementsByClassName("url-input")[0].value = "";

    document.getElementsByClassName("image-file-input")[0].value = "";
    document.getElementsByClassName("image-file-input")[0].files[0] = null;
}

function toggleNewBackgroundForm() {
    var newItemForm = document.getElementById("new-item-form");

    var saveButton = document.getElementById("save-button");
    saveButton.classList.add("newBackground");
    saveButton.classList.remove("newItem");

    document.getElementById("new-item-form-headline").textContent = "New Background";

    if (newItemForm.style.display !== "none") {
        document.getElementsByClassName("image-file-input")[0].value = "";
        document.getElementsByClassName("image-file-input")[0].files[0] = null;
    } else {
        newItemForm.style.display = "block";
    }
}

function toggleNewItemForm() {
    var newItemForm = document.getElementById("new-item-form");
    var inputDivs = document.getElementsByClassName("input-div");

    var saveButton = document.getElementById("save-button");
    saveButton.classList.add("newItem");
    saveButton.classList.remove("newBackground");

    document.getElementById("new-item-form-headline").textContent = "New Item";

    if (newItemForm.style.display !== "none") {
        newItemForm.style.display = "none";

        for (var i = 0; i < inputDivs.length; i ++) {
            inputDivs[i].style.display = 'none';
        }

        clearItemFormInputFields();
    } else {
        for (var i = 0; i < inputDivs.length; i ++) {
            inputDivs[i].style.display = 'block';
        }

        newItemForm.style.display = "block";
    }
}

function toggleRemoveItemIcons(){
    var removeIconContainers = document.getElementsByClassName("remove-icon-container");

    if (!removeItemIconsActive) {
        for (var i = 0; i < removeIconContainers.length; i++) {
            removeIconContainers[i].style.display = "block";

            removeIconContainers[i].addEventListener('click', function(event) {
                event.preventDefault();

                var itemName = event.srcElement.classList[0].replace(/remove-icon-container|\s+/g, '');

                var databaseItemName = itemName.replace(/0/g, ' ');

                removeItem(databaseItemName)
            });
        }

        removeItemIconsActive = true;
    } else {
        for (var i = 0; i < removeIconContainers.length; i++) {
            removeIconContainers[i].style.display = "none";
        }

        removeItemIconsActive = false;
    }

}
