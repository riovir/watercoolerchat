function getStarted() {
    let companyName = document.getElementById('company-name').value;
    location.href = "/company/" + encodeURIComponent(companyName) + "/";
}