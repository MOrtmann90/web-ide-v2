// ---------------------------------------------------------------

// NOSOTROS
var nosotrosBtn = document.getElementById("us-btn");
var nosotrosSection = document.getElementById("nosotros");
var nosotrosCloseBtn = document.getElementById("us-close-btn");
var nosotrosMobileBtn = document.getElementById("us-mobile-btn");

// Desktop
nosotrosBtn.addEventListener("click", function () {
  nosotrosSection.classList.toggle("hidden");
});

// Close btn
nosotrosCloseBtn.addEventListener("click", function () {
  nosotrosSection.classList.toggle("hidden");
});

// ---------------------------------------------------------------

// CONTACTO
var contactoSection = document.getElementById("contacto");
var contactoBtn = document.getElementById("contact-btn");
var contactoCloseBtn = document.getElementById("contact-close-btn");
var contactoMobileBtn = document.getElementById("contact-mobile-btn");

// Desktop
contactoBtn.addEventListener("click", function () {
  contactoSection.classList.toggle("hidden");
});

// Close btn
contactoCloseBtn.addEventListener("click", function () {
  contactoSection.classList.toggle("hidden");
});


