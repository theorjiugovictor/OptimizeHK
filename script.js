// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example for chatbot interaction (replace with actual AI chatbot implementation)
const chatbotButton = document.getElementById('chatbot-button');
chatbotButton.addEventListener('click', () => {
    alert('This would launch your chatbot!');
});

// Example for form validation (replace with your actual validation logic)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    // Add your form validation logic here
    // ...
});
