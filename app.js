function searchSuperheroes() {
    var searchQuery = encodeURIComponent(document.getElementById('searchInput').value);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8888/comp2245-assignment4/superheroes.php?query=' + searchQuery, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var resultDiv = document.getElementById('result');

            resultDiv.innerHTML = '';

            if (xhr.status == 200) {
                var superhero = JSON.parse(xhr.responseText);

                if (superhero) {
                    resultDiv.innerHTML += '<h3>' + superhero.alias + '</h3>';
                    resultDiv.innerHTML += '<h4>' + superhero.name + '</h4>';
                    resultDiv.innerHTML += '<p>' + superhero.biography + '</p>';
                } else {
                    resultDiv.innerHTML += '<p>Superhero not found</p>';
                }
            } else {
                resultDiv.innerHTML += '<p>Error retrieving data</p>';
            }
        }
    };

    xhr.send();
}

var searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', searchSuperheroes);