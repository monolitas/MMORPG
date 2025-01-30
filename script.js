// Load reviews from local storage
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

// Display reviews
function displayReviews() {
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = reviews.map((review, index) => `
    <div class="review-item">
      <h3>${review.gameName}</h3>
      <p><strong>Rating:</strong> ${review.rating}/5</p>
      <p>${review.reviewText}</p>
      <button onclick="editReview(${index})">Edit</button>
      <button onclick="deleteReview(${index})">Delete</button>
    </div>
  `).join('');
}

// Add a new review
document.getElementById('review-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const gameName = document.getElementById('game-name').value;
  const reviewText = document.getElementById('review-text').value;
  const rating = document.getElementById('rating').value;

  const review = {
    gameName,
    reviewText,
    rating
  };

  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  displayReviews();
  e.target.reset();
});

// Edit a review
function editReview(index) {
  const review = reviews[index];
  document.getElementById('game-name').value = review.gameName;
  document.getElementById('review-text').value = review.reviewText;
  document.getElementById('rating').value = review.rating;

  // Remove the old review
  reviews.splice(index, 1);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  displayReviews();
}

// Delete a review
function deleteReview(index) {
  reviews.splice(index, 1);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  displayReviews();
}

// Initialize
displayReviews();
