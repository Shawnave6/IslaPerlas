function revealInfo(id) {
    const info = document.getElementById(`info${id}`);
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
    } else {
        info.classList.add("hidden");
    }
}


window.addEventListener("scroll", () => {
    const articles = document.querySelectorAll(".destinations article");
    articles.forEach((article) => {
        const rect = article.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            article.classList.add("visible");
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const status = document.getElementById("form-status");
    const fields = ["name", "email", "subject", "message"];

    if (fields.some((field) => !form.elements[field].value.trim())) {
        status.textContent = "Please fill out all fields.";
        status.className = "error";
        return;
    }

    status.textContent = "Thank you! Your message has been sent.";
    status.className = "success";
    form.reset();
});
