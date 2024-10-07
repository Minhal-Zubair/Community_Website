function handleRegisterClick(event) {
  window.location.href = "Registration.html";
}

function handleReadMoreClick(event) {
  window.location.href = "https://en.wikipedia.org/wiki/Technology";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("register-btn-1")
    .addEventListener("click", handleRegisterClick);
  document
    .getElementById("register-btn-2")
    .addEventListener("click", handleRegisterClick);
  document
    .getElementById("register-btn-3")
    .addEventListener("click", handleRegisterClick);

  document
    .getElementById("read-more-btn-1")
    .addEventListener("click", handleReadMoreClick);
  document
    .getElementById("read-more-btn-2")
    .addEventListener("click", handleReadMoreClick);
  document
    .getElementById("read-more-btn-3v")
    .addEventListener("click", handleReadMoreClick);
});

function likeEvent(eventId) {
  const likeCountElement = document.getElementById(`like-count-${eventId}`);
  let currentCount = parseInt(likeCountElement.textContent, 10);
  likeCountElement.textContent = currentCount + 1;
}

function toggleCommentBox(eventId) {
  const commentBox = document.getElementById(`comment-box-${eventId}`);
  commentBox.style.display =
    commentBox.style.display === "none" || commentBox.style.display === ""
      ? "block"
      : "none";
}

function submitComment(eventId) {
  const commentInput = document.querySelector(
    `#comment-box-${eventId} .comment-input`
  );
  const commentList = document.getElementById(`comment-list-${eventId}`);
  const commentValue = commentInput.value.trim();

  if (commentValue) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment-item");
    commentElement.textContent = commentValue;
    commentList.appendChild(commentElement);
    commentInput.value = "";
  }
}

function likeNews(newsId) {
  const likeCountElement = document.getElementById(`news-like-count-${newsId}`);
  let currentCount = parseInt(likeCountElement.textContent, 10);
  likeCountElement.textContent = currentCount + 1;
}

function toggleNewsCommentBox(newsId) {
  const commentBox = document.getElementById(`news-comment-box-${newsId}`);
  commentBox.style.display =
    commentBox.style.display === "none" || commentBox.style.display === ""
      ? "block"
      : "none";
}

function submitNewsComment(newsId) {
  const commentInput = document.querySelector(
    `#news-comment-box-${newsId} .comment-input`
  );
  const commentList = document.getElementById(`news-comment-list-${newsId}`);
  const commentValue = commentInput.value.trim();

  if (commentValue) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment-item");
    commentElement.textContent = commentValue;
    commentList.appendChild(commentElement);
    commentInput.value = "";
  }
}

document.querySelectorAll(".comment-box").forEach((commentBox) => {
  commentBox.style.display = "none";
});


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    
    // Ensure video starts playing when visible
    Array.from(slides).forEach((slide, index) => {
        const videos = slide.getElementsByTagName('video');
        if (index === slideIndex - 1) {
            Array.from(videos).forEach(video => video.play());
        } else {
            Array.from(videos).forEach(video => video.pause());
        }
    });

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = totalSlides }
    showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);

const buttons = document.querySelectorAll('.action-btn');
buttons.forEach(button => {
  button.addEventListener('click', function() {
      // Find the icon inside the clicked button
      const icon = this.querySelector('ion-icon');

      // Check if the icon is a heart
      if (icon.getAttribute('name') === 'heart-outline') {
          icon.setAttribute('name', 'heart'); // Change to filled heart
          icon.classList.add('heart-filled'); // Apply red color
      } else if (icon.getAttribute('name') === 'heart') {
          icon.setAttribute('name', 'heart-outline'); // Change back to outline
          icon.classList.remove('heart-filled'); // Remove red color
      }
  });
});

