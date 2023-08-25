// Clipboard geoservicios
var copiarWms = document.getElementById("wms-btn");
var geoserviciosAlert = document.getElementById("geoservicios-alert");

function activarAlertaCopia() {
  geoserviciosAlert.classList.toggle("opacity-0");
  setTimeout(() => {
    geoserviciosAlert.classList.toggle("opacity-0");
  }, "3000");
}

copiarWms.addEventListener("click", function () {
  activarAlertaCopia();
  navigator.clipboard.writeText("http://cipres-bk.tandil.gov.ar/geoserver/wms");
});

var copiarWfs = document.getElementById("wfs-btn");

copiarWfs.addEventListener("click", function () {
  activarAlertaCopia();
  navigator.clipboard.writeText("http://cipres-bk.tandil.gov.ar/geoserver/wfs");
});

