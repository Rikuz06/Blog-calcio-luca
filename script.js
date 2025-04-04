// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section, #admin');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

// Function to handle post submission
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const category = document.getElementById('post-category').value;
    const imageFile = document.getElementById('post-image').files[0]; // Get the selected image file

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');

    // Create and add the image (if any)
    if (imageFile) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageFile); // Create a URL for the image
        imageElement.alt = title; // Set the alt text to the post title
        postElement.appendChild(imageElement);
    }

    postElement.innerHTML += `<h2>${title}</h2><p>${content}</p>`;

    // Create and add the date and time
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Get the current date and time
    const dateElement = document.createElement('div');
    dateElement.classList.add('post-date');
    dateElement.textContent = dateTimeString;
    postElement.appendChild(dateElement);

    // Append the post to the correct section
    const postsContainer = document.getElementById(`${category}-posts`);
    if (postsContainer) {
        postsContainer.appendChild(postElement);
    }

    // Append the post to the home section in reverse chronological order
    const homePostsContainer = document.getElementById('posts');
    if (homePostsContainer) {
        homePostsContainer.insertBefore(postElement, homePostsContainer.firstChild); // Insert at the beginning
    }

    // Clear the form
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-category').value = 'serie-a'; // Reset to default
    document.getElementById('post-image').value = ''; // Clear the image input

    // Show the home section
    showSection('home');
});

// Function to check the password
function checkPassword() {
    const password = document.getElementById('admin-password').value;
    const passwordMessage = document.getElementById('password-message');
    const addPostSection = document.getElementById('add-post');

    if (password === 'Luca2006') {
        passwordMessage.textContent = ''; // Clear any previous error message
        addPostSection.classList.remove('hidden'); // Show the add-post section
        document.getElementById('password-prompt').classList.add('hidden'); // Hide the password prompt
    } else {
        passwordMessage.textContent = 'Password errata!';
        passwordMessage.classList.add('error-message');
    }
}

// Show the home section by default
showSection('home');


