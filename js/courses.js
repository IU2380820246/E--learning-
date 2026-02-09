/* ===============================
   COURSES JAVASCRIPT
   =============================== */

/* ----- Enroll Course Function ----- */
function enrollCourse(courseName) {
  // Check login
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    alert("Please login first to enroll in a course.");
    window.location.href = "login.html";
    return;
  }

  // Get current user
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    alert("User not found. Please login again.");
    window.location.href = "login.html";
    return;
  }

  // Get all enrollments
  let enrollments =
    JSON.parse(localStorage.getItem("enrollments")) || {};

  // Get user's enrolled courses
  let userCourses = enrollments[user.email] || [];

  // Prevent duplicate enrollment
  if (userCourses.includes(courseName)) {
    alert("You are already enrolled in this course.");
    return;
  }

  // Add course
  userCourses.push(courseName);
  enrollments[user.email] = userCourses;

  // Save to LocalStorage
  localStorage.setItem("enrollments", JSON.stringify(enrollments));

  alert(`Successfully enrolled in "${courseName}"`);
}
