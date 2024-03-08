fetch("../alltrips.json")
  .then((response) => response.json())
  .then((myData) => loadData(myData));

function loadData(myData) {
  var mainContainer = document.getElementById("booking");
  
  for (var i = 0; i < myData.alltrips.length; i++) {
    let location = myData.alltrips[i].location;
    let cost = myData.alltrips[i].cost;
    let duration = myData.alltrips[i].duration;
    let url = myData.alltrips[i].url;
    
    let addCard = document.createElement("div");
    
    addCard.innerHTML = `
    <div class="col">
    <div class="card shadow-sm">
    <img src=${url} class="card-img-top" alt="picture"></img>
    <div class="card-body">
    <p class="card-text">Book trip to: <strong>${location}</strong> for ${duration} days for ${cost}</p>
    <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
    <button onclick="showPrompt()" type="button" class="btn btn-sm btn-outline-secondary open-dialog">Book</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    
    mainContainer.appendChild(addCard);
  }

  
}

function showPrompt() {
  alert("Success! Your trip has been booked!\nWe hope you have a great time on your trip!\nDon't forget to checkout our Guides page for some popular itineraries!");
}
