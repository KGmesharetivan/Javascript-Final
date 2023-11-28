document.addEventListener("DOMContentLoaded", (event) => {
  const registrationForm = document.getElementById("registration-form");

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(registrationForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"), // In a real-world scenario, handle passwords securely!
    };

    console.log("User Registration Data:", data);
    // Here, you would typically send the data to a server
    alert("Registration Successful!"); // Placeholder for success response
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementById("content-container");
  const addContentButton = document.getElementById("add-content");
  const removeContentButton = document.getElementById("remove-content");

  let items = [
    { title: "Item 1", description: "Description for Item 1" },
    { title: "Item 2", description: "Description for Item 2" },
    { title: "Item 3", description: "Description for Item 3" },
  ];

  // Function to display items
  function displayContent() {
    container.innerHTML = ""; // Clear existing content

    items.forEach((item, index) => {
      // Create a div for each item
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;

      // Append the item div to the container
      container.appendChild(itemDiv);

      // Add a click event listener to remove the item when clicked
      itemDiv.addEventListener("click", () => {
        removeItem(index);
      });
    });
  }

  // Function to add a new item
  function addItem() {
    const newItem = {
      title: `Item ${items.length + 1}`,
      description: `Description for Item ${items.length + 1}`,
    };
    items.push(newItem);
    displayContent();
  }

  // Function to remove an item
  function removeItem(index) {
    items.splice(index, 1);
    displayContent();
  }

  // Event listener for adding content
  addContentButton.addEventListener("click", addItem);

  // Event listener for removing content
  removeContentButton.addEventListener("click", () => {
    if (items.length > 0) {
      removeItem(items.length - 1);
    }
  });

  // Display initial content
  displayContent();
});

// Define a function to create and initialize the map
function createMap(location) {
  // Initialize the map centered at the provided location
  var map = L.map("map").setView(location, 13);

  // Add a tile layer (you can replace this with your desired map provider)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add markers or other map features as needed
  L.marker(location).addTo(map).bindPopup("Your current location.");

  // You can customize the map and add more features here
}

// Call the createMap function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var map;

  // Function to get the user's current location and update the map
  function getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          var userLocation = [latitude, longitude];

          // Create or update the map with the user's location
          if (!map) {
            // If the map doesn't exist yet, create it
            createMap(userLocation);
          } else {
            // If the map already exists, update its center
            map.setView(userLocation);
          }
        },
        function (error) {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }

  // Add a click event listener to the "Get My Location" button
  document
    .getElementById("get-location")
    .addEventListener("click", getLocation);
});

// Calculator functions
function appendToScreen(value) {
  document.getElementById("calculator-screen").value += value;
}

function clearScreen() {
  document.getElementById("calculator-screen").value = "";
}

function calculateResult() {
  const screenValue = document.getElementById("calculator-screen").value;
  try {
    const result = eval(screenValue);
    document.getElementById("calculator-screen").value = result;
  } catch (error) {
    document.getElementById("calculator-screen").value = "Error";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const threadForm = document.getElementById("thread-form");
  const threadTitleInput = document.getElementById("thread-title");
  const threadContentInput = document.getElementById("thread-content");
  const threadsList = document.getElementById("threads");

  threadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = threadTitleInput.value;
    const content = threadContentInput.value;

    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both title and content.");
      return;
    }

    // Create a new thread element
    const threadElement = document.createElement("li");
    threadElement.innerHTML = `<h4>${title}</h4><p>${content}</p>`;

    // Add the new thread to the list
    threadsList.appendChild(threadElement);

    // Clear the form inputs
    threadTitleInput.value = "";
    threadContentInput.value = "";
  });
});

const responsiveElement = document.getElementById("responsive-element");
const resizeButton = document.getElementById("resize-button");

resizeButton.addEventListener("click", () => {
  const currentWidth = parseInt(
    window.getComputedStyle(responsiveElement).width,
    10
  );
  const newWidth = currentWidth === 100 ? 50 : 100;
  responsiveElement.style.width = `${newWidth}px`;
  responsiveElement.style.height = `${newWidth}px`;
});

// SEO Analyzer Tool functionality
const seoUrlInput = document.getElementById("seo-url-input");
const analyzeButton = document.getElementById("analyze-button");
const seoResults = document.getElementById("seo-results");

analyzeButton.addEventListener("click", () => {
  const url = seoUrlInput.value.trim();
  if (url === "") {
    alert("Please enter a valid URL.");
    return;
  }

  // Simulate SEO analysis (replace with actual logic)
  const seoAnalysisResult = `SEO Analysis for ${url}:<br>Meta tags optimized, Page speed excellent, Mobile-friendly.`;

  seoResults.innerHTML = seoAnalysisResult;
});

// SEO Keyword Research Tool functionality
const keywordInput = document.getElementById("keyword-input");
const researchButton = document.getElementById("research-button");
const keywordResults = document.getElementById("keyword-results");

researchButton.addEventListener("click", () => {
  const keyword = keywordInput.value.trim();
  if (keyword === "") {
    alert("Please enter a keyword.");
    return;
  }

  // Simulate keyword research (replace with actual logic)
  const relatedKeywords = [
    "SEO tools",
    "Keyword analysis",
    "Search engine optimization",
    "Keyword optimization",
  ];
  const keywordResearchResult = `Related keywords for "${keyword}":<br>${relatedKeywords.join(
    ", "
  )}`;

  keywordResults.innerHTML = keywordResearchResult;
});

// Data Analysis Tool functionality
const csvFileInput = document.getElementById("csv-file-input");
const analyzeDataButton = document.getElementById("analyze-data-button");
const analysisResults = document.getElementById("analysis-results");

analyzeDataButton.addEventListener("click", () => {
  // Check if a file is selected
  if (!csvFileInput.files.length) {
    alert("Please select a CSV file for analysis.");
    return;
  }

  const selectedFile = csvFileInput.files[0];
  const fileName = selectedFile.name;

  // Simulate data analysis (replace with actual analysis logic)
  const analysisResult = `Analysis of ${fileName}:<br>Data loaded successfully, 1000 rows processed, 95% accuracy.`;

  analysisResults.innerHTML = analysisResult;
});

// Data Reports functionality (sample links)
const reportList = document.getElementById("report-list");

reportList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("report-link")) {
    const selectedReport = e.target.textContent;
    alert(`Downloading ${selectedReport}...`);
    // Replace with actual report download logic
  }
});

// Sample Live Chat functionality
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");
const onlineUsersList = document.getElementById("online-users");

// Sample online users data
const onlineUsers = ["User1", "User2", "User3"];

// Display online users
onlineUsers.forEach((user) => {
  const listItem = document.createElement("li");
  listItem.textContent = user;
  onlineUsersList.appendChild(listItem);
});

// Send a chat message
sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();

  if (message !== "") {
    // Create a new chat message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.textContent = message;

    // Append the new message to the chat window
    chatMessages.appendChild(messageElement);

    // Clear the input field
    chatInput.value = "";
  }
});

// Simulate receiving a chat message (for demonstration purposes)
function simulateIncomingMessage() {
  const incomingMessage = "Hello, how can I help you?";
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", "received");
  messageElement.textContent = incomingMessage;
  chatMessages.appendChild(messageElement);
}

// Simulate an incoming chat message after a delay
setTimeout(simulateIncomingMessage, 3000);

// Sample Multi-language functionality
const languageSelector = document.getElementById("language-selector");
const contentText = document.getElementById("content-text");

// Language-specific content
const languages = {
  en: "Welcome to our website!",
  es: "Bienvenido a nuestro sitio web!",
  fr: "Bienvenue sur notre site Web!",
  de: "Willkommen auf unserer Webseite!",
};

// Set default language
languageSelector.value = "en";
contentText.textContent = languages["en"];

// Update content based on language selection
languageSelector.addEventListener("change", function () {
  const selectedLanguage = languageSelector.value;
  contentText.textContent = languages[selectedLanguage];
});

// Language switcher buttons
const switchToEnglish = document.getElementById("switch-to-english");
const switchToSpanish = document.getElementById("switch-to-spanish");
const switchToFrench = document.getElementById("switch-to-french");
const switchToGerman = document.getElementById("switch-to-german");

// Handle language switch
switchToEnglish.addEventListener("click", () => {
  languageSelector.value = "en";
  contentText.textContent = languages["en"];
});

switchToSpanish.addEventListener("click", () => {
  languageSelector.value = "es";
  contentText.textContent = languages["es"];
});

switchToFrench.addEventListener("click", () => {
  languageSelector.value = "fr";
  contentText.textContent = languages["fr"];
});

switchToGerman.addEventListener("click", () => {
  languageSelector.value = "de";
  contentText.textContent = languages["de"];
});

// Sample Newsletter Subscription functionality
const subscriptionForm = document.getElementById("subscription-form");
const emailInput = document.getElementById("email");
const subscriptionStatus = document.getElementById("subscription-status");

subscriptionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value;

  // Simulate subscription success (Replace with your actual subscription logic)
  simulateSubscription(email);
});

// Simulated subscription function (Replace with actual implementation)
function simulateSubscription(email) {
  setTimeout(() => {
    // Simulate successful subscription
    subscriptionStatus.innerHTML = `
      <div class="alert alert-success">
        Thank you for subscribing! You will receive our newsletter at ${email}.
      </div>
    `;

    // Clear the form
    emailInput.value = "";
  }, 1500); // Simulate a delay for demonstration
}
