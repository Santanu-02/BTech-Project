// Dummy data for demonstration
const dustbins = [
    { location: "Park", status: "Full" },
    { location: "Street A", status: "Empty" },
    { location: "Street B", status: "Almost Full" }
];

// Function to display dustbin data
function displayDustbins() {
    const dustbinList = document.getElementById("dustbin-list");

    dustbins.forEach(dustbin => {
        const dustbinDiv = document.createElement("div");
        dustbinDiv.classList.add("dustbin");
        dustbinDiv.innerHTML = `
            <h2>Location: ${dustbin.location}</h2>
            <p>Status: ${dustbin.status}</p>
        `;
        dustbinList.appendChild(dustbinDiv);
    });
}

// Call the function to display dustbin data when the page loads
window.onload = displayDustbins;
