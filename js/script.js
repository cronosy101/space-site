document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Function to handle the intersection observer callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in");
            }
        });
    }

    // Set up the Intersection Observer
    var observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe each .link_page element
    var linkPageElements = document.querySelectorAll(".link_page");
    linkPageElements.forEach(function (element) {
        observer.observe(element);
    });
});