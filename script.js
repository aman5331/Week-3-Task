function createListingCard(listing) {
  // ... (existing code)

  // Create a button for booking cost breakdown
  const bookingCostButton = document.createElement("button");
  bookingCostButton.innerText = "Booking Cost Breakdown";
  bookingCostButton.addEventListener("click", function () {
    showBookingCostBreakdown(listing);
  });
  listingCard.appendChild(bookingCostButton);

  return listingCard;
}

function showBookingCostBreakdown(listing) {
  // Create a modal dialog
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create content for the modal
  const content = document.createElement("div");
  content.classList.add("modal-content");

  // Display the booking cost breakdown information
  content.innerHTML = `
        <h2>Booking Cost Breakdown</h2>
        <p>Base Rate: $${listing.baseRate}</p>
        <p>Additional Fees: $${listing.additionalFees}</p>
        <p>Total Cost: $${listing.totalCost}</p>
    `;

  // Add the content to the modal
  modal.appendChild(content);

  // Add the modal to the document
  document.body.appendChild(modal);

  // Close the modal when clicking outside of it
  modal.addEventListener("click", function () {
    document.body.removeChild(modal);
  });
}
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  async
  defer
></script>;
function initMap() {
  // Initialize the map with your preferred options
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 }, // Set the initial map center coordinates
    zoom: 8, // Set the initial zoom level
  });

  // Add markers to the map (we'll do this in the next step)
}
function createListingCard(listing) {
  // ... (existing code)

  // Create a marker on the map
  const marker = new google.maps.Marker({
    position: {
      lat: listing.location.latitude,
      lng: listing.location.longitude,
    },
    map: map, // The map you initialized in initMap
    title: listing.title,
  });

  // ... (other code)

  return listingCard;
}
