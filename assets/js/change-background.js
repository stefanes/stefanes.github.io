(function () {
  const images = [
    "alp-village.jpg",
    "autumn-lake.jpg",
    "autumn-trail.jpg",
    "beach.jpg",
    "canyon.jpg",
    "coffee.jpg",
    "cove.jpg",
    "curves.jpg",
    "fog.jpg",
    "green-canyon.jpg",
    "icy-canal.jpg",
    "mountains.jpg",
    "pier.jpg",
    "railway.jpg",
    "sunset.jpg",
    "tree-on-hill.jpg",
    "winter-lake.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage =
    'linear-gradient(var(--linear-gradient), var(--linear-gradient)), url("assets/img/' +
    images[randomIndex] +
    '")';
})();
