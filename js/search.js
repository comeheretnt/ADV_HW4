document.getElementById("searchForm").addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById("search").value.toLowerCase();
    const hotel = JSON.parse(localStorage.getItem("listHotel"));

    console.log("Hotel List:", hotel);
    console.log("Search query:", name);

    const foundHotel = hotel.filter(p => p.name.toLowerCase().includes(name));
    const resultDiv = document.getElementById("result");

    console.log("Found Hotel:", foundHotel);

    if (foundHotel.length > 0) {
        resultDiv.innerHTML = `Found: ${foundHotel[0].name} (Code: ${foundHotel[0].id})`;
    } else {
        resultDiv.innerHTML = `<p>No hotel found</p>`;
    }
});