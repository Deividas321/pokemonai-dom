export const housesData = [
    {
        title: 'Modern Villa in Beverly Hills',
        price: '$2,500,000',
        location: 'Beverly Hills, CA',
        contact: '555-6789',
        img: 'https://example.com/modern-villa.jpg'
    },
    {
        title: 'Spacious Townhouse in Manhattan',
        price: '$1,800,000',
        location: 'New York, NY',
        contact: '555-9101',
        img: 'https://example.com/townhouse-manhattan.jpg'
    },
    // Add more houses as needed
];

export function renderHouseListings() {
    return housesData.map(house => `
        <div class="listing">
            <h3>${house.title}</h3>
            <img src="${house.img}" alt="${house.title}">
            <div class="details">
                <p><strong>Price:</strong> ${house.price}</p>
                <p><strong>Location:</strong> ${house.location}</p>
                <p><strong>Contact:</strong> <a href="tel:${house.contact}">${house.contact}</a></p>
            </div>
        </div>
    `).join('');
}
