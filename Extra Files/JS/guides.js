fetch("../guides.json")
  .then((response) => response.json())
  .then((myData) => loadData(myData));

function loadData(myData) {
  var itineraryContainer = document.getElementById("itinerary");
  //console.log(myData);

  // Itinerary Container
  for (var i = 0; i < myData.USA.length; i++) {
    console.log(myData.USA[i].itinerary);
    let location = myData.USA[i].itinerary.location;
    let days = myData.USA[i].itinerary.days;
    let toSee = myData.USA[i].itinerary.toSee;
    let toEat = myData.USA[i].itinerary.toEat;
    let url = myData.USA[i].itinerary.url;

    let addCardItinerary = document.createElement("div");

    addCardItinerary.innerHTML = `
        <div id=card class="card shadow-sm">
            <div class="card-body">
                <img src=${url} class="card-img-top" alt="picture" width="20"></img>
                <h3><strong>${location}</strong> </h3>
                <p class="card-text"><br> ${days} days <br><strong>What to do:</strong> ${toSee} <br><strong>Where to eat:</strong> ${toEat}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>
        `;
    itineraryContainer.appendChild(addCardItinerary);
  }
}

/* 
Would be nice to list all things to see and eat as bullts or checkboxes so you can use it as a bucketlist
*/
