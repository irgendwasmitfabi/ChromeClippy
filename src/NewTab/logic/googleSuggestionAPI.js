document.getElementById('search').addEventListener('input', function () {
    var query = this.value;
    var autocompleteList = document.getElementById('autocomplete-list');

    if (query.length > 0) {
        fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${query}`)
            .then(response => response.json())
            .then(data => {
                var suggestions = data[1].slice(0, 5);
                autocompleteList.innerHTML = '';

                suggestions.forEach(suggestion => {
                    var div = document.createElement('div');
                    div.textContent = suggestion;
                    div.classList.add('autocomplete-suggestion');
                    div.addEventListener('click', function () {
                        document.getElementById('search').value = suggestion;
                        window.open(`https://www.google.com/search?q=${encodeURIComponent(suggestion)}`);
                    });
                    autocompleteList.appendChild(div);
                });
            });
    } else {
        autocompleteList.innerHTML = '';
    }
});