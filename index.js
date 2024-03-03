fetch("./data.json")
  .then((response) => response.json())
  .then((myData) => loadData(myData));

function loadData(myData) {
  var popularContainer = document.getElementById("popular-location");
  console.log(myData);

  // Popular Container
  for (var i = 0; i < myData.mostpopular.length; i++) {
    console.log(myData.i);
    let location = myData.mostpopular[i].location;
    let cost = myData.mostpopular[i].cost;
    let duration = myData.mostpopular[i].duration;
    let url = myData.mostpopular[i].url;

    let addCardPopular = document.createElement("div");

    addCardPopular.innerHTML = `
        <div id=card class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="picture" width="20"></img>
            <div class="card-body">
                <p class="card-text"><strong>${location}</strong>, <br>${cost} <br> ${duration}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>
        `;

    popularContainer.appendChild(addCardPopular);
  }

  // Other Popular Container

  // Deals Container
}
