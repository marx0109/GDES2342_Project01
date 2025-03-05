document.addEventListener("DOMContentLoaded", function () {
    const bookRow = document.querySelector(".book-row");
    const scrollLeft = document.querySelector(".scroll-left");
    const scrollRight = document.querySelector(".scroll-right");

    scrollLeft.addEventListener("click", () => {
        bookRow.scrollBy({ left: -200, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
        bookRow.scrollBy({ left: 200, behavior: "smooth" });
    });
});