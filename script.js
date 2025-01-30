// Sample game data
const games = [
  {
    id: 1,
    name: "World of Warcraft",
    description: "A legendary MMORPG with a rich lore and expansive world.",
    image: "assets/images/wow.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Final Fantasy XIV",
    description: "A visually stunning MMORPG with a captivating story.",
    image: "assets/images/ffxiv.jpg",
    rating: 4.7
  },
  {
    id: 3,
    name: "qqq,
    description: "A dynamic MMORPG with a focus on exploration and events.",
    image: "assets/images/gqq.jpg",
    rating: 4.3
  }
];

// Load games dynamically
const gameList = document.getElementById('game-list');
const gameSelect = document.getElementById('game-select');
const reviewList = document.getElementById('review-list');

function loadGames() {
  games.forEach(game => {
    // Add to game list
    gameList.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${game.image}" class="card-img-top" alt="${game.name}">
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <p class="card-text">${game.description}</p>
            <p class="card-text"><strong>Rating:</strong> ${game.rating}/5</p>
          </div>
        </div>
      </div>
    `;

    // Add to game select
    gameSelect.innerHTML += `<option value="${game.id}">${game.name}</option>`;
  });
}

// Handle review submission
document.getElementById('review-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const gameId = parseInt(gameSelect.value);
  const reviewText = document.getElementById('review-text').value;
  const rating = parseInt(document.getElementById('rating').value);

  // Save review to local storage
  const review = {
    gameId,
    reviewText,
    rating,
    date: new Date().toLocaleDateString()
  };
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // Display reviews
  displayReviews();
  alert('Review submitted successfully!');
  e.target.reset();
});

// Display reviews
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviewList.innerHTML = reviews.map(review => `
    <div class="review-item">
      <p><strong>Game:</strong> ${games.find(g => g.id === review.gameId).name}</p>
      <p><strong>Rating:</strong> ${review.rating}/5</p>
      <p><strong>Review:</strong> ${review.reviewText}</p>
      <p><small>${review.date}</small></p>
    </div>
  `).join('');
}

// Initialize
loadGames();
displayReviews();
