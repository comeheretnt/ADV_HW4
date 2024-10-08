var hotel = [
    {
        id: "HT1",
        name: "Hotel Sunshine",
        img: "hotel1.jpg",
        location: "New York",
        price: 122000,
    },
    {
        id: "HT2",
        name: "Hotel Paradise",
        img: "hotel2.jpg",
        location: "Los Angeles",
        price: 400000,
    },
    {
        id: "HT3",
        name: "Hotel Elite",
        img: "hotel3.jpg",
        location: "Chicago",
        price: 350000,
    },
    {
        id: "HT4",
        name: "Hotel Modern",
        img: "hotel4.jpg",
        location: "Houston",
        price: 564000,
    },
    {
        id: "HT5",
        name: "Hotel Baggy",
        img: "hotel5.jpg",
        location: "Phoenix",
        price: 654000,
    },
    {
        id: "HT6",
        name: "Hotel Polka Dot",
        img: "hotel6.jpg",
        location: "Philadelphia",
        price: 123000,
    },
];

// Save the hotel array to local storage
function Save() {
    localStorage.setItem('listHotel', JSON.stringify(hotel));
}

// Load the hotel array from local storage
function load() {
    hotel = JSON.parse(localStorage.getItem('listHotel'));
}

// Display the hotel list in HTML
if (localStorage.getItem("listHotel") != null) {
    load();
}
Save();

var listLocal = function() {
    var listhotel = "";
    for (var i in hotel) {
        var data = JSON.parse(JSON.stringify(hotel[i]));
        var listhotel = '<div class="hotel-card">';
        listhotel += '<div class="card hotel p-2" style="width:auto">';
        listhotel += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listhotel += '<div class="card-title hotel-title text-center h5">' + data.name + '</div>';
        listhotel += '<div class="location text-center h6">' + data.location + '</div>'; 
        listhotel += '<div class="price text-center h6">' + data.price.toLocaleString() + '₫</div>';
        listhotel += '<span class="text-center view-details btn btn-outline-primary" onclick="viewDetails(\'' + data.id + '\')">';
        listhotel += 'View Details';
        listhotel += '</span>';
        listhotel += '</div>';
        listhotel += '</div>';

        document.getElementById("toprate").innerHTML += listhotel;
    }
    Save();
}

listLocal();

// Function to view details of a hotel
function viewDetails(id) {
    window.location.href = 'detail.html?id=' + id;
}