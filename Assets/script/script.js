// Add event listener to all blog cards
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Toggle the active class on the card
        card.classList.toggle('active');
    });
});

// Add event listener to all blog card titles
const blogCardTitles = document.querySelectorAll('.blog-card-title');
blogCardTitles.forEach((title) => {
    title.addEventListener('click', (e) => {
        // Prevent the default behavior of the link
        e.preventDefault();
        // Toggle the active class on the parent card
        title.parentNode.classList.toggle('active');
    });
});