function showPolicy(type) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");

    if (type === "privacy") {
        modalText.innerHTML = "<h2>Privacy Policy</h2><p>Your privacy policy content goes here...</p>";
    } else if (type === "terms") {
        modalText.innerHTML = "<h2>Terms and Conditions</h2><p>Your terms and conditions content goes here...</p>";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
