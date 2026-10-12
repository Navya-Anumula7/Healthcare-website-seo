
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check whether any field is empty
    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#b42318";
        return;
    }

    // Display a confirmation message
    formMessage.textContent =
        `Thank you, ${name}! Your enquiry has been validated successfully.`;

    formMessage.style.color = "#087f8c";

    // Clear the form fields
    contactForm.reset();
});
