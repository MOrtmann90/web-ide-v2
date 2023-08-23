// Loader
window.addEventListener("load", function () {
  setTimeout(function () {
    const loaderContainer = document.querySelector(".loader-container");
    const contentContainer = document.querySelector(".content-container");
    const menuResp = document.querySelector("#menu-responsive");

    loaderContainer.style.opacity = "0";
    setTimeout(function () {
      loaderContainer.classList.add("hidden");
      contentContainer.classList.toggle("block");
      menuResp.classList.toggle("hidden");
      contentContainer.style.opacity = "1";
    }, 500);
  }, 1000);
});

// NOSOTROS
var nosotrosBtn = document.getElementById("us-btn");
var nosotrosSection = document.getElementById("nosotros");
var nosotrosCloseBtn = document.getElementById("us-close-btn");
var nosotrosMobileBtn = document.getElementById("us-mobile-btn");

// Desktop
nosotrosBtn.addEventListener("click", function () {
  nosotrosSection.classList.toggle("hidden");
});

// Mobile
nosotrosMobileBtn.addEventListener("click", function () {
  nosotrosSection.classList.toggle("hidden");
});

// Close btn
nosotrosCloseBtn.addEventListener("click", function () {
  nosotrosSection.classList.toggle("hidden");
});
