document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbyefiDPmfYriuyAjOsgq-G-84McByOugK5oQNn6NiOBuavETiA3RTiAPhvVu9JmNgOZAQ/exec", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("form-status").innerText = "✅ Submitted successfully!";
      form.reset();
    })
    .catch((err) => {
      console.error("Submission failed:", err);
      document.getElementById("form-status").innerText = "❌ Something went wrong.";
    });
});
