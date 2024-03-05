fetch("./data.json")
  .then((response) => response.json())
  .then((myData) => loadData(myData));

function loadData(myData) {
  var popularContainer = document.getElementById("popular-location");
  var otherContainer = document.getElementById("other-locations");
  var dealsContainer = document.getElementById("deals");
  console.log(myData);

  // Popular Container
  for (var i = 0; i < myData.mostpopular.length; i++) {
    console.log(myData.i);
    let location = myData.mostpopular[i].location;
    let cost = myData.mostpopular[i].cost;
    let duration = myData.mostpopular[i].duration;
    let url = myData.mostpopular[i].url;

    let addCardPopular = document.createElement("div");

    addCardPopular.classList.add("col");

    addCardPopular.innerHTML = `
        <div id=card class="card shadow-sm" style="max-width:20%">
            <img src=${url} class="card-img-top" alt="picture"></img>
            <div class="card-body">
                <p class="card-text"><strong>${location}</strong> <br>${cost} <br> ${duration}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>
        `;

    popularContainer.appendChild(addCardPopular);
  }

  // Other Popular Container
  for (var i = 0; i < myData.otherpopular.length; i++) {
    console.log(myData.i);
    let location = myData.otherpopular[i].location;
    let cost = myData.otherpopular[i].cost;
    let duration = myData.otherpopular[i].duration;
    let url = myData.otherpopular[i].url;

    let addCardOther = document.createElement("div");

    addCardOther.innerHTML = `
        <div id=card class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="picture"></img>
            <div class="card-body">
                <p class="card-text"><strong>${location}</strong> <br>${cost} <br> ${duration}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>
        `;

    otherContainer.appendChild(addCardOther);
  }

  // Deals Container
  for (var i = 0; i < myData.deals.length; i++) {
    console.log(myData.i);
    let location = myData.deals[i].location;
    let costold = myData.deals[i].costold;
    let costnew = myData.deals[i].costnew;
    let duration = myData.deals[i].duration;
    let url = myData.deals[i].url;

    let addCardDeals = document.createElement("div");

    addCardDeals.innerHTML = `
          <div id=card class="card shadow-sm">
              <img src=${url} class="card-img-top" alt="picture"></img>
              <div class="card-body">
                  <p class="card-text"><strong>${location}</strong> <br><strike>${costold}</strike> > ${costnew} <br> ${duration}</p>
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
              </div>
          </div>
          `;

    dealsContainer.appendChild(addCardDeals);
  }
}
