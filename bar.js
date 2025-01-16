document.querySelector('.menu-btn').addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');
  event.stopPropagation(); // Prevents the event from bubbling up and causing the dropdown to close
  if (dropdown.style.right === '0px') {
    dropdown.style.right = '-200px'; // Hide the dropdown
  } else {
    dropdown.style.right = '0px'; // Show the dropdown
  }
});

// Close dropdown when any option is clicked
const options = document.querySelectorAll('.dropdown ul li a');
options.forEach(option => {
  option.addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.right = '-200px'; // Close the dropdown
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');
  const menuBtn = document.querySelector('.menu-btn');
  if (!menuBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.right = '-200px'; // Close the dropdown if click is outside
  }
});