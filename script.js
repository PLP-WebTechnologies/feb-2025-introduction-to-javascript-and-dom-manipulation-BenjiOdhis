// 1. Change text content dynamically
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  heading.textContent = "Welcome to the Interactive HTML5 Demo Page 💡";
});

// 2. Modify CSS styles dynamically
document.addEventListener("DOMContentLoaded", () => {
  const featuredImage = document.getElementById("featured-img");
  featuredImage.style.border = "5px dashed #007acc";
  featuredImage.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
});

// 3. Add/remove an element when a button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.querySelector("form");

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Extra Message";
  toggleBtn.type = "button";
  toggleBtn.style.marginTop = "20px";

  const message = document.createElement("p");
  message.textContent = "🎉 Thank you for registering!";
  message.style.color = "#007acc";
  message.style.fontWeight = "bold";
  message.style.display = "none";

  toggleBtn.addEventListener("click", () => {
    message.style.display = message.style.display === "none" ? "block" : "none";
  });

  formSection.appendChild(toggleBtn);
  formSection.appendChild(message);
});
