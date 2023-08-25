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