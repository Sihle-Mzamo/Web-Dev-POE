// --------------------------
// FORM VALIDATION
// --------------------------

// Validate contact or sponsor form
function validateForm(event, formId) {
    event.preventDefault();

    const form = document.getElementById(formId);
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    let valid = true;

    if (name && name.value.trim() === "") {
        alert("Please enter your full name.");
        valid = false;
    }

    if (email && !email.value.match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    if (message && message.value.trim().length < 10) {
        alert("Message must be at least 10 characters.");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
}

// --------------------------
// DONATION FORM VALIDATION
// --------------------------
function validateDonation(event) {
    event.preventDefault();

    const name = document.querySelector("input[name='name']");
    const email = document.querySelector("input[name='email']");
    const amount = document.querySelector("input[name='amount']");

    if (name.value.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (amount.value <= 0) {
        alert("Donation amount must be greater than zero.");
        return;
    }

    alert("Thank you for your donation!");
}

// --------------------------
// SCROLL TO TOP BUTTON
// --------------------------
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "topButton";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";
topBtn.style.borderRadius = "50%";
topBtn.style.display = "none";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// --------------------------
// MOBILE NAV TOGGLE (optional)
// --------------------------
function toggleNav() {
    const nav = document.querySelector(".site-nav");
    nav.classList.toggle("hidden");
}
