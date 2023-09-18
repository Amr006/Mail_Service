const overlay = document.querySelector(".back");
const bookingFormContain = document.querySelector("section.booking_form .contain");
const loading = document.querySelector(".loading");
const bookingForm = document.getElementById(".booking_form");

//Buttons
const addButton = document.getElementById("add_button");
const closeButton = document.getElementById("close_button");
const cancelButton = document.getElementById("cancel_button");
const saveButton = document.getElementById("save_button");

//Select & inputs
const time = document.getElementById("time");
const closerName = document.getElementById("closer_name");
const customerName = document.getElementById("customer_name");
const customerEmail = document.getElementById("customer_email");
const hotelName = document.getElementById("hotel_name");
const hotelPrice = document.getElementById("hotel_price");
const searchInput = document.getElementById("search")

function close_form() {
  overlay.classList.remove("overlay");
  bookingFormContain.classList.remove("active");
  document.body.classList.remove("active");
}

addButton.addEventListener("click", () => {
  overlay.classList.add("overlay");
  bookingFormContain.classList.add("active");
  document.body.classList.add("active");
});

overlay.addEventListener("click", close_form);

closeButton.addEventListener("click", close_form);

cancelButton.addEventListener("click", close_form);

bookingForm.addEventListener("submit", () => {
  loading.classList.add("active");
});

searchInput.addEventListener("input",async()=>{
  await fetch("/search")
})
