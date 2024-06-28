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
chatbotButton?.addEventListener('click', () => {
    alert('This would launch your chatbot!');
});

// Example for form validation (replace with your actual validation logic)
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add your form validation logic here
    alert('Form submitted!');
});

// Form validation for the sign-up page
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Proceed with form submission (e.g., send data to server)
    alert('Sign up successful!');
});

// Form validation for the sign-up page
const signupForm = document.getElementById('signup-form');
signupForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Proceed with form submission (e.g., send data to server)
    alert('Sign up successful!');
});

// Handle search functionality for the find businesses page
const searchForm = document.getElementById('search-form');
const businessList = document.getElementById('business-list');

searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById('search').value.toLowerCase();

    // Example search results (replace with actual search logic)
    const exampleBusinesses = [
        { name: 'Best Restaurant', description: 'A great place to eat.' },
        { name: 'Top Plumber', description: 'Reliable plumbing services.' },
    ];

    const results = exampleBusinesses.filter(business => 
        business.name.toLowerCase().includes(searchQuery) ||
        business.description.toLowerCase().includes(searchQuery)
    );

    businessList.innerHTML = results.map(business => 
        `<div class="business-card">
            <h3>${business.name}</h3>
            <p>${business.description}</p>
        </div

