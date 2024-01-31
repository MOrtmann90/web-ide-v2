// Clipboard geoservicios
var copiarWms = document.getElementById("wms-btn");
var copiarWfs = document.getElementById("wfs-btn");
var geoserviciosAlert = document.getElementById("geoservicios-alert");

function activarAlertaCopia() {
  geoserviciosAlert.classList.toggle("opacity-0");
  setTimeout(() => {
    geoserviciosAlert.classList.toggle("opacity-0");
  }, 3000);
}

copiarWms.addEventListener("click", async function () {
  activarAlertaCopia();
  try {
    await navigator.clipboard.writeText(
      "http://cipres-bk.tandil.gov.ar/geoserver/wms"
    );
    console.log("Texto copiado al portapapeles");
  } catch (error) {
    console.error("Error al copiar texto al portapapeles: " + error);
  }
});

copiarWfs.addEventListener("click", async function () {
  activarAlertaCopia();
  try {
    await navigator.clipboard.writeText(
      "http://cipres-bk.tandil.gov.ar/geoserver/wfs"
    );
    console.log("Texto copiado al portapapeles");
  } catch (error) {
    console.error("Error al copiar texto al portapapeles: " + error);
  }
});
