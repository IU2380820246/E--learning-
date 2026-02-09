/* ===============================
   DASHBOARD JAVASCRIPT
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  // Check login
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "login.html";
    return;
  }

  // Get current user
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return;

  // Set welcome text
  const welcomeText = document.getElementById("welcomeText");
  welcomeText.textContent = `Welcome, ${user.name} 👋`;

  // Set profile info
  document.getElementById("userName").textContent = user.name;
  document.getElementById("userEmail").textContent = user.email;

  // Load enrolled courses
  loadEnrolledCourses(user.email);
});

/* ----- Load Enrolled Courses ----- */
function loadEnrolledCourses(userEmail) {
  const enrolledList = document.getElementById("enrolledCourses");
  enrolledList.innerHTML = "";

  const allEnrollments =
    JSON.parse(localStorage.getItem("enrollments")) || {};

  const userCourses = allEnrollments[userEmail] || [];

  if (userCourses.length === 0) {
    enrolledList.innerHTML = "<li>No courses enrolled yet</li>";
    return;
  }

  userCourses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = course;
    enrolledList.appendChild(li);
  });
}
