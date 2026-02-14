const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");
const loveVideo = document.getElementById("loveVideo");
const videoCaption = document.getElementById("videoCaption");

// Start experience on click/tap
function startExperience() {
  intro.style.transition = "opacity 0.5s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    content.style.display = "block";

    // Play background music
    music.muted = false;
    music.play().catch(() => console.log("Audio play blocked"));

    // Play video silently
    loveVideo.muted = true;
    loveVideo.loop = true;
    loveVideo.play().catch(() => console.log("Video play blocked"));

    // Change caption when video starts
    loveVideo.addEventListener("play", () => {
      videoCaption.textContent = "Happy Valentines Day Bebu ❤️";
    });

    startAutoScroll();
  }, 500);
}

// Click or tap anywhere on intro
intro.addEventListener("click", startExperience);
intro.addEventListener("touchstart", startExperience);

// Fade-in observer
const fadeElements = document.querySelectorAll("img, video");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.3 });
fadeElements.forEach(el => observer.observe(el));

// Optional: auto-scroll between sections
function startAutoScroll() {
  const sections = document.querySelectorAll("section");
  let index = 0;

  const scrollInterval = setInterval(() => {
    index++;
    if (index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    } else {
      clearInterval(scrollInterval);
    }
  }, 8000); // 8 seconds per section
}

// Uncomment to auto-scroll automatically
// window.addEventListener("load", startAutoScroll);
