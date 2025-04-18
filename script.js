// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const responseDiv = document.getElementById("form-response");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      responseDiv.textContent = "Please fill out all fields.";
      responseDiv.style.color = "red";
      return;
    }

    if (!validateEmail(email)) {
      responseDiv.textContent = "Please enter a valid email address.";
      responseDiv.style.color = "red";
      return;
    }

    // If valid
    responseDiv.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseDiv.style.color = "green";
    form.reset(); // Clear the form
  });

  // Email validation function
  function validateEmail(email) {
    // Basic regex for email pattern
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
