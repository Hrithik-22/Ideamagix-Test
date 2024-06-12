function loaderFunction() {
    setTimeout(showPage, 3000);
}
  
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderDIV").style.display = "block";
}
  