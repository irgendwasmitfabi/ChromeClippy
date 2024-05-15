document.getElementById("openNewItemForm").addEventListener("click", function (event) {
    event.preventDefault();

    toggleNewItemForm();
});

document.getElementById("close-button").addEventListener("click", function () {
    toggleNewItemForm();
});

function toggleNewItemForm() {
    var newItemForm = document.getElementById("new-item-form");

    if (newItemForm.style.display !== "none") {
        newItemForm.style.display = "none";

        document.getElementsByClassName("name-input")[0].value = "";
        document.getElementsByClassName("url-input")[0].value = "";

        document.getElementsByClassName("image-file-input")[0].value = "";
        document.getElementsByClassName("image-file-input")[0].files[0] = null;
    } else {
        newItemForm.style.display = "block";
    }
}
