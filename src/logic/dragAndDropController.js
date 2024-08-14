function addDragAndDropEventListeners() {
    var itemButtons = document.querySelectorAll('.item-button');
    var draggedItemButton = null;

    itemButtons.forEach(itemButton => {
        itemButton.addEventListener('dragstart', () => {
            draggedItemButton = itemButton;
            setTimeout(() => {
                itemButton.classList.add('dragging');
            }, 0);
        });

        itemButton.addEventListener('dragend', () => {
            draggedItemButton.classList.remove('dragging');
            draggedItemButton = null;
        });

        itemButton.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        itemButton.addEventListener('drop', () => {
            if (draggedItemButton !== itemButton) {
                var itemButtonIndex = Array.from(itemButton.parentNode.children).indexOf(itemButton);
                var draggedIndex = Array.from(draggedItemButton.parentNode.children).indexOf(draggedItemButton);
                if (itemButtonIndex > draggedIndex) {
                    itemButton.parentNode.insertBefore(draggedItemButton, itemButton.nextSibling);
                } else {
                    itemButton.parentNode.insertBefore(draggedItemButton, itemButton);
                }
            }
        });
    });
}