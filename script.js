fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("menu-container").innerHTML = data;
    });
fetch('rodape.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("rodape-container").innerHTML = data;
    });
