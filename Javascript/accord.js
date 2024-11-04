// Get all thumbnail images and the main image element
const thumbnails = document.querySelectorAll('.thumbnail-img');
const mainImage = document.querySelector('.main-image');

// Loop through all thumbnails and add click event listener
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Log the thumbnail src for debugging
        console.log(this.src);

        // Change the src of the main image to the clicked thumbnail's src
        mainImage.src = this.src;
    });
});
// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to the clicked button and corresponding tab panel
        this.classList.add('active');
        const targetPanel = document.getElementById(this.dataset.tab);

        // Ensure the targetPanel exists before adding class
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});
function showMenu() {
    document.getElementById("dropdown-content").style.display = "block";
}

function hideMenu() {
    document.getElementById("dropdown-content").style.display = "none";
}
// script.js
function changeReadMore() {
    const mycontent =
        document.getElementById('mybox1id');
    const mybutton =
        document.getElementById('mybuttonid');
    const span1 = document.getElementById("span1")

    if (mycontent.style.display === 'none' || mycontent.style.display === '') {
        mycontent.style.display = 'inline';
        mybutton.textContent = 'Read Less';
        span1.style.display = "none";
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
        span1.style.display = "inline";
    }
}
document.addEventListener("DOMContentLoaded", loadReviews);

// Submit review function
function submitReview() {
    // Get input values
    const author = document.getElementById("author").value.trim();
    const review = document.getElementById("review").value.trim();

    // Basic validation
    if (author === "" || review === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Create a review object
    const reviewData = { author, review };

    // Save review to localStorage
    saveReview(reviewData);

    // Display the review on the page
    displayReview(reviewData);

    // Clear the form fields
    document.getElementById("author").value = "";
    document.getElementById("review").value = "";
}

// Save review to localStorage
function saveReview(reviewData) {
    // Get existing reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    // Add new review to the array
    reviews.push(reviewData);
    // Save updated reviews back to localStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

// Load and display all reviews from localStorage
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(displayReview);
}

// Display a single review on the page
function displayReview(reviewData) {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    const reviewAuthor = document.createElement("div");
    reviewAuthor.classList.add("review-author");
    reviewAuthor.textContent = reviewData.author;

    const reviewContent = document.createElement("div");
    reviewContent.classList.add("review-content");
    reviewContent.textContent = reviewData.review;

    reviewItem.appendChild(reviewAuthor);
    reviewItem.appendChild(reviewContent);

    document.getElementById("reviews").appendChild(reviewItem);
}