// ===================================
// LAB 4: DARK MODE 
// ===================================

// INSTRUCTIONS:
// 1. Select the necessary DOM elements
// 2. Add an event listener to the toggle button
// 3. Implement the toggleDarkMode function
// 4. Update the icon when switching modes
// 5. BONUS: Save the preference to localStorage

// ===================================
// STEP 1: Select DOM Elements
// ===================================
// Select the theme toggle button (id: 'themeToggle')
const themeToggleBtn = document.getElementById('themeToggle');

// Select the theme icon element (id: 'themeIcon')
const themeIcon = document.getElementById('themeIcon');

// Get the <body> element
const body = document.body;


// ===================================
// STEP 2: Add Event Listener
// ===================================
// Run toggleDarkMode every time the button is clicked
themeToggleBtn.addEventListener('click', toggleDarkMode);


// ===================================
// STEP 3: Toggle Dark Mode Function
// ===================================
function toggleDarkMode() {
    // Flip the theme class on <body>; the CSS variables do the rest
    body.classList.toggle('dark-mode');

    // Match the icon to whichever mode we just switched into
    const isDarkMode = body.classList.contains('dark-mode');
    updateIcon(isDarkMode);
}


// ===================================
// STEP 4: Update Icon Function
// ===================================
function updateIcon(isDarkMode) {
    // Dark mode offers the sun (switch to light); light mode offers the moon
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
}


// ===================================
// Optional: Load Saved Preference
// ===================================
// This function runs when the page loads
// It checks if there's a saved preference in localStorage
function loadSavedTheme() {
    // TODO (OPTIONAL): 
    // 1. Get the saved theme from localStorage
    // 2. If it exists and is 'dark', add the dark-mode class to body
    // 3. Update the icon accordingly
    // Your code here:

}

// Call the function when the page loads (uncomment when you implement it)
loadSavedTheme();


// ===================================
// HELPFUL REMINDERS:
// ===================================
// DOM Selection:
//   - document.getElementById('id')
//   - document.querySelector('#id')
//   - document.body

// Class Manipulation:
//   - element.classList.add('class-name')
//   - element.classList.remove('class-name')
//   - element.classList.toggle('class-name')
//   - element.classList.contains('class-name')

// Event Listeners:
//   - element.addEventListener('event', function)
//   - Common events: 'click', 'mouseover', 'keydown'

// Changing Content:
//   - element.textContent = 'new text'
//   - element.innerHTML = '<span>html</span>'

// localStorage (BONUS):
//   - localStorage.setItem('key', 'value')
//   - localStorage.getItem('key')
//   - localStorage.removeItem('key')
// ===================================