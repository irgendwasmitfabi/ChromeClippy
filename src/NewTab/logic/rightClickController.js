var itemButtons = document.querySelectorAll('.item-button');

itemButtons.forEach(itemButton => {
    itemButton.addEventListener("contextmenu", function(event) {
        event.preventDefault();

        var rightClickMenu = document.getElementById("right-click-menu");
        
        rightClickMenu.style.display = "block";
        rightClickMenu.style.left = (event.pageX - 10)+"px";
        rightClickMenu.style.top = (event.pageY - 10)+"px";
    }, false);
    itemButton.addEventListener("click", function(event) {
        var rightClickMenu = document.getElementById("right-click-menu");

        rightClickMenu.style.display = "";
        rightClickMenu.style.left = "";
        rightClickMenu.style.top = "";
    }, false);
})
