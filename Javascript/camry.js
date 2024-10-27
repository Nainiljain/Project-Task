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
