function generateCertificate() {
  const name = document.getElementById("name").value.trim();

  if (!name) {
    alert("Please enter your name!");
    return;
  }

  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = "images/certificate1.jpg"; // Canva template

  img.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Draw Name
    ctx.font = " 50px 'Times New Roman', serif";
ctx.fillStyle = "#000";
ctx.textAlign = "center";
ctx.fillText(name.toUpperCase(), canvas.width / 2, 400); // adjust Y=400 as per Canva template

  };
}

function downloadCertificate() {
  const canvas = document.getElementById("certificateCanvas");
  const link = document.createElement("a");
  link.download = "certificate.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
