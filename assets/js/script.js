const coll = document.querySelectorAll(".collapsible");
const subColl = document.querySelectorAll(".sub-collapsible");
const content = document.querySelectorAll(".content");
const subContent = document.querySelectorAll(".sub-content");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

for (let i = 0; i < subColl.length; i++) {
  subColl[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function sendEmail() {
  // You can add JavaScript code here to send an email through an AJAX request to a server-side script (e.g., PHP).
  // This example demonstrates the client-side part only.

  alert("Email sent to abc@gmail.com"); // This is just a placeholder for demonstration.
}

