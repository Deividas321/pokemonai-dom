// export const carsData = [
//     {
//         make: 'Tesla',
//         model: 'Model S',
//         price: '$80,000',
//         location: 'Los Angeles, CA',
//         contact: '555-1234',
//         color: 'black',
//         img: 'https://example.com/tesla-model-s.jp'
//     },
//     {
//         make: 'BMW',
//         model: 'X5',
//         price: '$60,000',
//         location: 'New York, NY',
//         contact: '555-5678',
//         color: 'white',
//         img: 'https://example.com/bmw-x5.jpg'
//     },
//     // Add more cars as needed
// ];

// export function renderCarListings() {
//     return carsData.map(car => `
//         <div class="listing">
//             <h3>${car.make} ${car.model}</h3>
//             <img src="${car.img}" alt="${car.make} ${car.model}">
//             <div class="details">
//                 <p><strong>Price:</strong> ${car.price}</p>
//                 <p><strong>Location:</strong> ${car.location}</p>
//                 <p><strong>Contact:</strong> <a href="tel:${car.contact}">${car.contact}</a></p>
//                 <p><strong>Color:</strong> ${car.color}</p>
//             </div>
//         </div>
//     `).join('');
// }
