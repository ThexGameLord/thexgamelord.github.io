// Get the reference URL from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const refParam = urlParams.get("ref");

// Get the reference link element
const referenceLink = document.getElementById("referenceLink");

// Set the href attribute of the reference link
if (refParam) {
    referenceLink.href = refParam;
} else {
    referenceLink.textContent = "No reference link available";
}
