createItemIcons();

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

    var div = document.createElement('div');
    div.classList.add("item-button");
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

    div.appendChild(link);
    div.appendChild(name);
    link.appendChild(image);
    itemContainer.appendChild(div);
}