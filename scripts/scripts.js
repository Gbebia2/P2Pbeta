// scripts.js
const onlineUsers = [
    "User1",
    "User2",
    "User3",
    // More users...
];

function updateOnlineUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing list
    onlineUsers.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
    });
}

updateOnlineUsers();

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        if (sidebar.classList.contains('open')) {
            toggleButton.style.display = 'none'; // Hide the button when the sidebar is open
        } else {
            toggleButton.style.display = 'block'; // Show the button when the sidebar is closed
        }
    });

    // Optionally, show the toggle button again when clicking outside the sidebar
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('open');
            toggleButton.style.display = 'block'; // Show the button again
        }
    });
});

