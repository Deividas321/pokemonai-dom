// import { renderCarListings } from './js/cars.js';
// import { renderHouseListings } from './js/houses.js';

// const carListingsDOM = document.getElementById('car-listings');
// carListingsDOM.innerHTML = renderCarListings();

// const houseListingsDOM = document.getElementById('house-listings');
// houseListingsDOM.innerHTML = renderHouseListings();

// const container = document.getElementById("container");
// let rows = document.getElementsByClassName("gridRow");
// let cells = document.getElementsByClassName("cell");

// // Creates a default grid sized 16x16
// function defaultGrid() {
//     makeRows(16);
//     makeColumns(16);
// }

// // Takes (rows, columns) input and makes a grid
// function makeRows(rowNum) {

//     // Creates rows
//     for (r = 0; r < rowNum; r++) {
//         let row = document.createElement("div");
//         container.appendChild(row).className = "gridRow";
//     };
// };

// // Creates columns
// function makeColumns(cellNum) {
//     for (i = 0; i < rows.length; i++) {
//         for (j = 0; j < cellNum; j++) {
//             let newCell = document.createElement("div");
//             rows[j].appendChild(newCell).className = "cell";
//         };

//     };
// };
const cars = [
    { make: "Tesla", model: "Model S", location: "Los Angeles, CA", price: "€6000", contact: "555-1234", img: "https://tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png" },
    { make: "BMW", model: "X5", location: "New York, NY", price: "€5500", contact: "555-5678", img: "https://img.goodfon.com/original/1366x768/a/93/bmw-x5-e53-vladimir.jpg" },
    { make: "Audi", model: "Q7", location: "Chicago, IL", price: "€10000", contact: "555-9101", img: "https://hips.hearstapps.com/hmg-prod/images/2025-audi-q7-exterior-motion-101-65b912b91d9ca.jpg?crop=0.479xw:0.538xh;0.119xw,0.320xh&resize=768:*" },
    { make: "Ford", model: "Mustang", location: "Houston, TX", price: "€45000", contact: "555-1122", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/2018_Ford_Mustang_GT_5.0.jpg" },
    { make: "Chevrolet", model: "Camaro", location: "Phoenix, AZ", price: "€40000", contact: "555-3344", img: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/performance/camaro/design/v2/2024-camaro-collector-ed-4v2.png?imwidth=960" },
    { make: "Bmw", model: "E30", location: "Anyksciai", price: "€10000", contact: "555-3344", img: "https://cdn.bimmertoday.de/wp-content/uploads/2023/03/KW-BMW-3er-E30-325iX-Tuning-Fahrwerk-V3-Klassik-01-750x500.jpg" },
    { make: "Bmw", model: "E39", location: "Kaunas, AZ", price: "€1500", contact: "555-3344", img: "https://classicsworld.co.uk/wp-content/uploads/sites/6/2023/09/IMG_8310.jpg?w=900"},
 { make: "Bmw", model: "e60", location: "Vilnius", price: "€3000", contact: "555-3344", img: "https://i.pinimg.com/originals/86/5c/c7/865cc7deb3cf77a86da56e68f36384a7.jpg" },
];
const gridContainer = document.getElementById('car-grid');

cars.forEach(car => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const carUrl = `https://autoplius.lt/skelbimai/${car.make.toLowerCase()}-${car.model.toLowerCase()}`;

    gridItem.innerHTML = `
        <img src="${car.img}" alt="${car.make} ${car.model}">
        <span><strong>Make:</strong> ${car.make}</span>
        <span><strong>Model:</strong> ${car.model}</span>
        <span><strong>Location:</strong> ${car.location}</span>
        <span><strong>Price:</strong> ${car.price}</span>
        <span><strong>Contact:</strong> <a href="tel:${car.contact}">${car.contact}</a></span>
        <a href="${carUrl}" target="_blank">Read more</a>
    `;
    gridContainer.appendChild(gridItem);
});
