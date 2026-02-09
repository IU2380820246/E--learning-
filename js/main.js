/* ===============================
   MAIN COMMON JAVASCRIPT FILE
   =============================== */

/* ----- Check Login Status ----- */
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // If user is logged in, update navbar buttons
  if (isLoggedIn === "true") {
    updateNavbarForLoggedInUser();
  }
});

/* ----- Update Navbar After Login ----- */
function updateNavbarForLoggedInUser() {
  const nav = document.querySelector(".navbar nav");
  if (!nav) return;

  nav.innerHTML = `
    <a href="index.html" class="active">Home</a>
    <a href="courses.html">Courses</a>
    <a href="dashboard.html">Dashboard</a>
    <a href="#" class="btn-nav" onclick="logout()">Logout</a>
  `;
}

/* ----- Logout Function ----- */
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

/* ----- Utility: Smooth Scroll ----- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
