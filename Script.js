const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

   
    msg.textContent = "";

    
    if (name.length < 3) {
      msg.textContent = "Name must be at least 3 characters.";
      msg.style.color = "red";
      return;
    }

   
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      msg.textContent = "Enter a valid email address.";
      msg.style.color = "red";
      return;
    }

   
    if (message.length < 10) {
      msg.textContent = "Message must be at least 10 characters.";
      msg.style.color = "red";
      return;
    }

   
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";

    form.reset();
  });
}