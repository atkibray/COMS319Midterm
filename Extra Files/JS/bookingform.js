fetch(".../JSON/data.json")
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


// function loadMovies(myMovies) {
//     var CardMovie = document.getElementById("col");

//     var checkboxes = [];
//     var cards = [];

//     for (var i = 0; i < myMovies.movies.length; i++) {
//         let title = myMovies.movies[i].title;
//         let year = myMovies.movies[i].year;
//         let url = myMovies.movies[i].url;

//         let checkbox = "checkbox" + i.toString();
//         let card = "card" + i.toString();

//         let addCardMovie = document.createElement("div");

//         addCardMovie.classList.add("col");

//         addCardMovie.innerHTML = `
//         <input type="checkbox" id=${checkbox} class="form-check-input" checked>
//         <label for=${checkbox} class="form-check-label">Show Image ${i}</label>
//         <div id=${card} class="card shadow-sm">
//             <img src=${url} class="card-img-top" alt="picture"></img>
//             <div class="card-body">
//                 <p class="card-text"><strong>${title}</strong>, ${year}</p>
//                 <div class="d-flex justify-content-between align-items-center">
//                 </div>
//             </div>
//         </div>
//         `;

//         CardMovie.appendChild(addCardMovie);

//         let cbox = document.getElementById(checkbox);
//         checkboxes.push(cbox);

//         let ccard = document.getElementById(card);
//         cards.push(ccard);
//     }

//     checkboxes.forEach((checkboxParam, index) => {
//         console.log(index);
//         checkboxParam.addEventListener('change', () => {
//             if (checkboxParam.checked) {
//                 cards[index].style.display = 'block';
//             } else {
//                 cards[index].style.display = 'none';
//             }
//         });
//     });
//}