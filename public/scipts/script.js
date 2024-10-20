document.addEventListener("DOMContentLoaded", function() {
    const languages = ["JavaScript", "Python", "Java", "C#", "Ruby", "Go", "Swift", "Kotlin", "PHP", "C++"];
    let currentIndex = 0;

    function changeLanguage() {
        currentIndex = (currentIndex + 1) % languages.length;
        document.getElementById("programming-language").innerText = languages[currentIndex];
    }

    setInterval(changeLanguage, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-input");

    // Initially hide the placeholder
    searchInput.setAttribute("placeholder", "");

    // Show placeholder and border when search input (with background icon) is clicked
    searchInput.addEventListener("click", function() {
        if (!searchInput.classList.contains("clicked")) {
            searchInput.setAttribute("placeholder", "Search...");
            searchInput.classList.add("clicked");
            searchInput.focus();
        }
    });

    // Optionally, hide the placeholder and border when the input loses focus if it's empty
    searchInput.addEventListener("blur", function() {
        if (searchInput.value === "") {
            searchInput.setAttribute("placeholder", "");
            searchInput.classList.remove("clicked");
        }
    });
});

