function registration(id) {
  return document.getElementById(id);
}

// Collect inputs
let name = registration("name");
let email = registration("email");
let phone = registration("phone");
let dob = registration("dob");
let country = registration("country");
let city = registration("city");
let region = registration("region");
let postal = registration("postal");
let register = registration("register");
let street1 = registration("street1");
let street2 = registration("street2"); // optional

register.addEventListener("click", function (e) {
  let error = document.querySelectorAll(".error");

  // Name
  if (name.value.trim() === "") {
    error[0].innerHTML = "Full name is required";
    e.preventDefault();
  } else {
    error[0].innerHTML = "";
  }

  // Email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    error[1].innerHTML = "Email is required";
    e.preventDefault();
  } else if (!emailRegex.test(email.value)) {
    error[1].innerHTML = "Invalid email format";
    e.preventDefault();
  } else {
    error[1].innerHTML = "";
  }

  // Phone
  let phoneRegex = /^[0-9]{7,15}$/;
  if (phone.value.trim() === "") {
    error[2].innerHTML = "Phone number is required";
    e.preventDefault();
  } else if (!phoneRegex.test(phone.value)) {
    error[2].innerHTML = "Phone must be 7–15 digits";
    e.preventDefault();
  } else {
    error[2].innerHTML = "";
  }

  // DOB
  if (dob.value === "") {
    error[3].innerHTML = "Date of birth is required";
    e.preventDefault();
  } else {
    error[3].innerHTML = "";
  }

  // Gender
  let gender = document.querySelector("input[name='gender']:checked");
  if (!gender) {
    error[4].innerHTML = "Please select your gender";
    e.preventDefault();
  } else {
    error[4].innerHTML = "";
  }

  // Street 1
  if (street1.value.trim() === "") {
    error[5].innerHTML = "Street address is required";
    e.preventDefault();
  } else {
    error[5].innerHTML = "";
  }

  // Street 2 (optional)
  error[6].innerHTML = "";

  // Country
  if (country.value === "") {
    error[7].innerHTML = "Please select a country";
    e.preventDefault();
  } else {
    error[7].innerHTML = "";
  }

  // City
  if (city.value.trim() === "") {
    error[8].innerHTML = "City is required";
    e.preventDefault();
  } else {
    error[8].innerHTML = "";
  }

  // Region
  if (region.value.trim() === "") {
    error[9].innerHTML = "Region is required";
    e.preventDefault();
  } else {
    error[9].innerHTML = "";
  }

  // Postal
  let postalRegex = /^[0-9]{3,10}$/;
  if (postal.value.trim() === "") {
    error[10].innerHTML = "Postal code is required";
    e.preventDefault();
  } else if (!postalRegex.test(postal.value)) {
    error[10].innerHTML = "Invalid postal code";
    e.preventDefault();
  } else {
    error[10].innerHTML = "";
  }
});