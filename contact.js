document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("test-contact-success");

  const fields = {
    name: document.getElementById("contact-name"),
    email: document.getElementById("contact-email"),
    subject: document.getElementById("contact-subject"),
    message: document.getElementById("contact-message"),
  };

  const errors = {
    name: document.getElementById("test-contact-error-name"),
    email: document.getElementById("test-contact-error-email"),
    subject: document.getElementById("test-contact-error-subject"),
    message: document.getElementById("test-contact-error-message"),
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    successMsg.textContent = "";

    Object.values(errors).forEach((el) => (el.textContent = ""));

    if (fields.name.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      valid = false;
    }

    if (fields.email.value.trim() === "") {
      errors.email.textContent = "Email is required.";
      valid = false;
    } else if (!validateEmail(fields.email.value.trim())) {
      errors.email.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (fields.subject.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      valid = false;
    }

    if (fields.message.value.trim() === "") {
      errors.message.textContent = "Message is required.";
      valid = false;
    } else if (fields.message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent =
        "Thank you! Your message has been sent successfully.";
      form.reset();
    }
  });
});
