function submitForm() {
    var form = document.getElementById("contactForm");
    if (form.checkValidity()) {
        document.getElementById("successAlert").style.display = "block";
    } else {
        form.reportValidity();
    }
}
