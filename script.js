const projectCarousel = document.querySelector('.project-carousel');


function toggleDetails(button) {
    const details = button.nextElementSibling;

    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        button.textContent = "View Details";
    }
}


const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const thankYouMessage = document.getElementById('thankYouMessage');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');


function validateInput() {
    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.innerText = 'Please enter your name.';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.innerText = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageError.innerText = 'Please enter a message.';
        messageError.style.display = 'block';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    return valid;
}

// Submit form event
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate the form
    if (validateInput()) {
        
        const formData = new FormData(form);

        fetch('https://formspree.io/f/xzzbpqbw', { 
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                
                form.reset(); 
                form.style.display = 'none'; 
                thankYouMessage.style.display = 'block'; 
            } else {
                alert("Failed to send the message. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to send the message. Please try again.");
        });
    }
});

document.querySelector('.download-btn').addEventListener('click', function () {
    alert('Your resume will start downloading shortly.');
});
