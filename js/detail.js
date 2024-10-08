// Get parameter from URL
function getQuery(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get hotel from local storage
function getHotel() {
    const hotelList = JSON.parse(localStorage.getItem('listHotel'));
    return hotelList || [];
}

// Function Display detail of hotel
function displayDetail() {
    const id = getQuery('id');
    const hotelList = getHotel();
    const currentHotel = hotelList.find(hotel => hotel.id === id);

    const hotelDetail = document.getElementById('div_details');
    
    if (currentHotel) {
        hotelDetail.innerHTML = `
            <div class="flex-container">
                <div class="div_img">
                    <img src="img/${currentHotel.img}" alt="${currentHotel.name}" id="img">
                </div>
                <div class="div_des">
                    <h2 class="name">${currentHotel.name}</h2>
                    <p class="location"><i class="fas fa-map-marker-alt"></i>${currentHotel.location}</p>
                    <p class="price">${currentHotel.price.toLocaleString()}₫ <span class="price-per-night">/night</span></p>
                    <button class="button" id="btn">Book Now</button>
                </div>
            </div>
        `;
    } else {
        hotelDetail.innerHTML = '<p class="error-message">Hotel not found</p>';
    }
}

document.addEventListener('DOMContentLoaded', displayDetail);

// Log để debug
console.log('Hotel list:', getHotel());