const overlay = document.querySelector(".back");
const bookingFormContain = document.querySelector("section.booking_form .form");
const loading = document.querySelector(".loading");
const bookingForm = document.getElementById("booking_form");
const searchForm = document.getElementById("search_form");
const filterForm = document.getElementById("filter_form");

//Buttons
const addButton = document.getElementById("add_button");
const closeButton = document.getElementById("close_button");
const cancelButton = document.getElementById("cancel_button");
const saveButton = document.getElementById("save_button");
const chevronButtonLeft = document.getElementById("chevron_button_left");
const chevronButtonRight = document.getElementById("chevron_button_right");

//Select & inputs
const time = document.getElementById("time");
const closerName = document.getElementById("closer_name");
const customerName = document.getElementById("customer_name");
const customerEmail = document.getElementById("customer_email");
const hotelName = document.getElementById("hotel_name");
const hotelPrice = document.getElementById("hotel_price");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter_by_closer_name");
const selectedPage = document.getElementById("page_count");
const webGhoulAlert = document.getElementById("webGhoul_alert");

const query = new URLSearchParams(window.location.search);

const page = query.get("page");

const maxPages = +selectedPage.getAttribute("max");

if (page) {
  selectedPage.innerHTML = page;
} else {
  selectedPage.innerHTML = "0";
}

if (+selectedPage.textContent <= 0) {
  chevronButtonLeft.classList.add("disable");
  chevronButtonRight.classList.remove("disable");
} else {
  chevronButtonLeft.classList.remove("disable");
}

if (+selectedPage.textContent >= maxPages) {
  chevronButtonRight.classList.add("disable");
  chevronButtonLeft.classList.remove("disable");
} else {
  chevronButtonRight.classList.remove("disable");
}

filterSelect.addEventListener("change", () => {
  filterForm.submit();
});

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

const handleWebGhoulAlert = () => {
  webGhoulAlert.classList.add("active");
  setTimeout(() => {
    webGhoulAlert.classList.remove("active");
  }, 5000);
  document.cookie = "sent=false; path=/";
};

const existingCookie = document.cookie;

const cookieData = Object.fromEntries(
  existingCookie.split("; ").map((pair) => pair.split("="))
);

if (cookieData.sent === "true") {
  handleWebGhoulAlert();
}

chevronButtonRight.addEventListener("click", () => {
  window.location.href = `/?page=${+page+1}`;
});

chevronButtonLeft.addEventListener("click", () => {
  window.location.href = `/?page=${+page-1}`;
});

// searchInput.addEventListener("input", () => {
//   console.log(searchInput.value)
//   const formData = new FormData();
//   formData.append("search", searchInput.value);
//   fetch("/search", {
//     method: "POST",
//     body: JSON.stringify({ search:searchInput.value }), // Send the search query as JSON
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
// });

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
// });
