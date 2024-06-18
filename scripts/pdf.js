document.addEventListener("DOMContentLoaded", (event) => {
  const openPdfBtn1 = document.getElementById("open-pdf-btn1");
  const openPdfBtn2 = document.getElementById("open-pdf-btn2");
  const openPdfBtn3 = document.getElementById("open-pdf-btn3");
  const frame = document.getElementById("pdf-viewer");
  const pdfPopup = document.getElementById("pdf-popup-content");
  const pdfSection = document.getElementById("pdf-section");
  const closePdfBtn = document.getElementById("close-pdf-btn");


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  

  openPdfBtn1.addEventListener("click", () => {
    pdfPopup.style.display = "block";
    frame.src = "https://docs.google.com/gview?url=https://tokenratings.jlabsdigital.com/assets/pdf-assets/manifesto.pdf&embedded=true";
    pdfSection.style.backdropFilter = "blur(10px)";
    // document.body.classList.add("noscroll");
  });
  openPdfBtn2.addEventListener("click", () => {
    pdfPopup.style.display = "block";
    frame.src = "https://docs.google.com/gview?url=https://tokenratings.jlabsdigital.com/assets/pdf-assets/token-ratings.pdf&embedded=true";
    // document.body.classList.add("noscroll");
  });
  openPdfBtn3.addEventListener("click", () => {
    pdfPopup.style.display = "block";
    frame.src = "https://docs.google.com/gview?url=https://tokenratings.jlabsdigital.com/assets/pdf-assets/token-ratings.pdf&embedded=true";
    // document.body.classList.add("noscroll");
  });
  closePdfBtn.addEventListener("click", () => {
    pdfPopup.style.display = "none";
    frame.src = "";
    // document.body.classList.remove("noscroll");
  });
});
