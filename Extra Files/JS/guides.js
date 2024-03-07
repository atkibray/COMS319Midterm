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
        <div class="col" style="width:18rem">
          <img src=${url} class="card-img-top" alt="picture"></img>
          <h3 style="text-align:center;margin-top:5px"><strong>${location}</strong></h3>
          <p><strong>What to see:</strong><ul>`;

          for (var i = 0; i < toSee.length; i++) {
           let item = toSee[i];
           addCardItinerary.innerHTML += `<li>${item}</li>`;
          }

          addCardItinerary.innerHTML += `</ul><strong>Where to eat:</strong><ul>`;

          for (var i = 0; i < toEat.length; i++) {
           let item = toEat[i];
           addCardItinerary.innerHTML += `<li>${item}</li>`;
          }

          addCardItinerary.innerHTML += `</p></div>`;

        itineraryContainer.appendChild(addCardItinerary);
  }
}

/* 
Would be nice to list all things to see and eat as bullts or checkboxes so you can use it as a bucketlist
*/
