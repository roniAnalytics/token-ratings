document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("pdfModal");
    var btn = document.getElementById("openPopup");
    var span = document.getElementsByClassName("close")[0];
    var iframe = document.getElementById("pdfFrame");
  
    btn.onclick = function() {
      iframe.src = "./assets/file.pdf"; // replace with the path to your PDF file
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
      iframe.src = ""; // clear the iframe src when closing
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = ""; // clear the iframe src when closing
      }
    }
  });
  