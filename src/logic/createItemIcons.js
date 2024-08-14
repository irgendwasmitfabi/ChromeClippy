createItemIcons();

document.getElementsByClassName("removeItems").addEventListener("click", function (event) {
    event.preventDefault();

    toggleRemoveItemIcons();
});

function createItemIcons() {
    getItemsFromStorage(function (items) {
        if (items && items.length > 0) {
            items.forEach(item => {
                addNewItem(item);
            });
        }
        addDragAndDropEventListeners();
    });
}

function addNewItem(item) {
    var itemContainer = document.getElementById("item-container");

    var itemClassName = item.name.replace(" ", "#");
    console.log(itemClassName);

    var div = document.createElement('div');
    div.classList.add("item-button");
    div.classList.add(itemClassName);
    div.draggable = true;

    var link = document.createElement('a');
    link.href = item.url;
    link.classList.add("item-link");

    var image = document.createElement('img');
    image.src = item.imageFileUrl;
    image.classList.add("item-img");

    var name = document.createElement('p');
    name.textContent = item.name;
    name.classList.add("item-name");

    var removeIconContainer = document.createElement('div');
    removeIconContainer.classList.add("remove-icon-container");
    removeIconContainer.style.display = "none";

    var removeIcon = document.createElement('p');
    removeIcon.textContent = "x";
    removeIcon.classList.add("remove-icon");

    div.appendChild(link);
    div.appendChild(name);
    link.appendChild(image);
    link.appendChild(removeIconContainer);
    removeIconContainer.appendChild(removeIcon);
    itemContainer.appendChild(div);
}