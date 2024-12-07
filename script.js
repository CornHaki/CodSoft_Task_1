const projectCarousel = document.querySelector('.project-carousel');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');


nextBtn.addEventListener('click', () => {
    projectCarousel.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

prevBtn.addEventListener('click', () => {
    projectCarousel.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});


function toggleDetails(button) {
    const details = button.nextElementSibling;

    details.style.display = details.style.display === "none" ? "block" : "none";
    button.textContent = details.style.display === "block" ? "Hide Details" : "View Details";
}

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (validateInput()) {
        try {
            const formData = new FormData(form);
            const response = await fetch('https://formspree.io/f/xzzbpqbw', { 
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); 
                form.style.display = 'none'; 
                thankYouMessage.style.display = 'block'; 
            } else {
                throw new Error('Failed to send the message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to send the message. Please try again.");
        }
    }
});
