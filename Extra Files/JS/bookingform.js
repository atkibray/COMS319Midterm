fetch("./JSON/data.json")
    .then(response => response.json())
    .then(myData => loadData(myData));

function loadData(myData) {
    var popularContainer = document.getElementById("popular");

    for (var i = 0; i < myData.popular.length; i++) {
        let location = myData.popular[i].location;
        let cost = myData.popular[i].cost;
        let duration = myData.popular[i].duration;
        let url = myData.popular[i].url;

        let addCardPopular = document.createElement("div");

        div.innerHTML = `
        <div id=${card} class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="picture"></img>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>, ${year}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>
        `;

        popularContainer.appendChild(addCardPopular);
    }
}
