// 1. Projects Data Array
const projects = [
  { title: "Bio Page", description: "My first HTML and CSS page.", category: "HTML" },
  { title: "Responsive Nav", description: "A flexbox nav bar that adapts.", category: "CSS" },
  { title: "Grid Gallery", description: "Cards laid out with CSS Grid.", category: "CSS" },
  { title: "Contact Form", description: "A form with validation.", category: "HTML" }
];

const grid = document.querySelector("#projectsGrid");
function renderProjects(projectsToRender) {
  if (!grid) return;
  grid.innerHTML = "";
  projectsToRender.forEach(function (project) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.description + "</p>";
    grid.appendChild(card);
  });
}

if (grid) {
  renderProjects(projects);
}

function filterProjects(category) {
  if (category === "All") {
    renderProjects(projects);
  } else {
    const filtered = projects.filter(p => p.category === category);
    renderProjects(filtered);
  }
}

const form = document.querySelector("#contactForm");
const messageOutput = document.querySelector("#formMessage");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
 
    const name = document.querySelector("#name").value.trim();
    const text = document.querySelector("#message").value.trim();
 
    if (name === "" || text.length < 10) {
      if (messageOutput) {
        messageOutput.textContent = "Please enter your name and a message of at least 10 characters.";
      }
      return;
    }
 
    if (messageOutput) {
      messageOutput.textContent = "Thanks, " + name + "! Your message was received.";
    }
    form.reset();
  });
}

const messageInput = document.querySelector("#message");
const charCounter = document.querySelector("#charCounter");

if (messageInput && charCounter) {
  messageInput.addEventListener("input", function () {
    const currentLength = messageInput.value.length;
    charCounter.textContent = "Characters: " + currentLength;
  });
}
const darkModeBtn = document.querySelector("#darkModeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Save the current state to localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}